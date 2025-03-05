import { useGetCotizacionesQuery, useAddCotizacionMutation } from "./cotizacionesApi";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5001");

const Cotizaciones = () => {
    const { data: cotizaciones, error, isLoading } = useGetCotizacionesQuery();
    const navigate = useNavigate();
    const [addCotizacion] = useAddCotizacionMutation();
    const [nuevaCotizacion, setNuevaCotizacion] = useState({ cliente: "", monto: 0, fecha: "" });

    useEffect(() => {
        console.log("isLoading:", isLoading);
        console.log("error:", error);
        console.log("cotizaciones:", cotizaciones);
    }, [isLoading, error, cotizaciones]);

    const handleBack = () => {
        navigate("/home");
    };

    const handleComprar = (cotizacion) => {
        navigate("/comprar-cotizaciones", { state: { cotizacion } });
    };

    const handleAddCotizacion = () => {
        console.log("Nueva cotización:", nuevaCotizacion);
        addCotizacion(nuevaCotizacion);
        socket.emit("nueva-cotizacion", nuevaCotizacion);
        setNuevaCotizacion({ cliente: "", monto: 0, fecha: "" });
    };

    if (isLoading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <h1 className="text-4xl font-bold mb-6 text-gray-600">Cotizaciones</h1>
            <div className="w-full max-w-4xl p-4 bg-white shadow-lg rounded-lg">
                <div className="mb-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    <input
                        type="text"
                        placeholder="Cliente"
                        value={nuevaCotizacion.cliente}
                        onChange={(e) => setNuevaCotizacion({ ...nuevaCotizacion, cliente: e.target.value })}
                        className="text-gray-800 bg-gray-100 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2 rounded-md"
                    />
                    <input
                        type="number"
                        placeholder="Monto"
                        value={nuevaCotizacion.monto}
                        onChange={(e) => setNuevaCotizacion({ ...nuevaCotizacion, monto: e.target.value })}
                        className="text-gray-800 bg-gray-100 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2 rounded-md"
                    />
                    <input
                        type="date"
                        placeholder="Fecha"
                        value={nuevaCotizacion.fecha}
                        onChange={(e) => setNuevaCotizacion({ ...nuevaCotizacion, fecha: e.target.value })}
                        className="text-gray-800 bg-gray-100 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2 rounded-md"
                    />
                    <button onClick={handleAddCotizacion} className="bg-blue-500 text-white px-4 py-2 rounded col-span-3 sm:col-span-1">
                        Agregar
                    </button>
                </div>
                {cotizaciones &&
                    cotizaciones.map((cotizacion) => (
                        <div key={cotizacion.id} className="mb-4 p-4 border-b-2 border-gray-200">
                            <h2 className="text-xl font-semibold text-gray-700">{cotizacion.cliente}</h2>
                            <p className="text-gray-700">Monto: ${cotizacion.monto}</p>
                            <p className="text-gray-500">Fecha: {cotizacion.fecha}</p>
                            <button
                                onClick={() => handleComprar(cotizacion)}
                                className="bg-green-600 text-white px-4 py-2 rounded"
                            >
                                Comprar
                            </button>
                        </div>
                    ))}
            </div>
            <button onClick={handleBack} className="mt-6 bg-gray-500 text-white px-6 py-2 rounded-full w-64">
                Volver al Home
            </button>
        </div>
    );
};

export default Cotizaciones;
