const express = require('express');
const Stripe = require('stripe');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
}));

app.use(express.json());

app.post("/pagar", async (req, res) => {
    try {
        const { monto, paymentMethodId } = req.body;
        console.log("Datos recibidos:", req.body);

        if (!monto || isNaN(monto) || monto <= 0) {
            return res.status(400).json({ error: "El monto es inválido." });
        }

        const amountInCents = Math.round(monto * 100);

        const paymentIntent = await stripe.paymentIntents.create({
            amount: amountInCents,
            currency: "usd",
            payment_method: paymentMethodId,
            confirm: true,
            automatic_payment_methods: { enabled: true },
            return_url: "http://localhost:5173/pago-exitoso",
        });

        res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        console.error("Error en pago:", error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(5003, () => {
    console.log("Servidor Stripe escuchando en el puerto 5003");
});