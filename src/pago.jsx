import { useState,useRef } from "react";
    import { loadStripe } from "@stripe/stripe-js";
    import {
        CardElement,
        Elements,
        useStripe,
        useElements,
    } from "@stripe/react-stripe-js";

    const stripePromise = loadStripe(
        "pk_test_51Qz5TaIVyJ3Dqp3P4h9ys8AjRhjpxMQe827g5jCujINnQSNdThgAIygBHZnQ0Oew80WLORy0BojHpPuFoF9d52Hx00yw37fUln"
    );

    const PagoForm = () => {
        const stripe = useStripe();
        const elements = useElements();
        const [monto, setMonto] = useState("");
        const [pagoExitoso, setPagoExitoso] = useState(false);
        const [errorPago, setErrorPago] = useState(null);
        const cardElementRef = useRef(null);

        const handlePago = async (event) => {
            event.preventDefault();

            if (!stripe || !elements) {
                return;
            }

            const cardElement = elements.getElement(CardElement);

            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: "card",
                card: cardElement,
            });

            if (error) {
                console.error("Error en pago:", error);
                setErrorPago(error.message);
                setPagoExitoso(false);
                return;
            }

            try {
                const res = await fetch("http://localhost:5002/pagar", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        monto,
                        paymentMethodId: paymentMethod.id,
                    }),
                });

                if (!res.ok) {
                    throw new Error(`Error en el pago: ${res.statusText}`);
                }

                const data = await res.json();
                console.log("Pago exitoso:", data);
                setPagoExitoso(true);
                setErrorPago(null);
            } catch (error) {
                console.error("Error en pago:", error);
                setErrorPago(error.message);
                setPagoExitoso(false);
            }
        };

        return (
            <form onSubmit={handlePago} className="flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold mb-4 text-gray-500">Realizar Pago</h1>
                {pagoExitoso && <p className="text-green-500 mb-4">Pago realizado con éxito!</p>}
                {errorPago && <p className="text-red-500 mb-4">Error: {errorPago}</p>}
                <div className="mb-4">
                    <input
                        type="number"
                        placeholder="Monto"
                        value={monto}
                        onChange={(e) => setMonto(e.target.value)}
                        className="border p-2 rounded"
                    />
                </div>
                <div className="mb-4">
                    <CardElement ref={cardElementRef} />
                </div>
                <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded"
                >
                    Pagar
                </button>
            </form>
        );
    };

    const Pago = () => (
        <Elements stripe={stripePromise}>
            <PagoForm />
        </Elements>
    );

    export default Pago;