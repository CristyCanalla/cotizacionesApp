import { useLocation, useNavigate } from "react-router-dom";
import Pago from "./Pago";

const ComprarCotizaciones = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { cotizacion } = location.state || {};

    if (!cotizacion) {
        return (
            <div className="flex flex-col justify-center items-center h-screen bg-gray-100 p-6">
                <p className="text-lg mb-4 text-gray-600">No se seleccionó ninguna cotización.</p>
                <button 
                    onClick={() => navigate("/cotizaciones")}
                    className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-md"
                >
                    Volver a Cotizaciones
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <h1 className="text-4xl font-bold mb-6 text-gray-800">Comprar Cotizaciones</h1>
            <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
                <p className="text-xl font-semibold mb-4 text-gray-600">Cotización seleccionada: {cotizacion.cliente}</p>
                <p className="text-gray-700 mb-4">Monto: ${cotizacion.monto}</p>
                <Pago />
                <button 
                    onClick={() => navigate("/cotizaciones")} 
                    className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-md mt-4"
                >
                    Volver
                </button>
            </div>
        </div>
    );
};

export default ComprarCotizaciones;
