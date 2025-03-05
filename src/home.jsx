import { useNavigate } from "react-router-dom";
import { auth } from "./firebaseConfig";

const Home = () => {
  const navigate = useNavigate();
  const user = auth.currentUser; // Obtener el usuario actual

  const handleLogout = () => {
    auth.signOut();
    navigate("/"); // Redirige al login
  };

  const handleViewCotizaciones = () => {
    navigate("/cotizaciones");
  };

  const handleViewValorBolsa = () => {
    navigate("/valor-bolsa");
  };

  const handleComprarCotizaciones = () => {
    navigate("/comprar-cotizaciones");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
  <h1 className="text-4xl font-bold mb-6 text-violet-500 dark:text-violet-300">
        Bienvenido, {user ? user.displayName : "Usuario"}
      </h1>
      <div className="space-y-4">
        <button
          onClick={handleViewCotizaciones}
          className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-md"
        >
          Ver Cotizaciones
        </button>
        <button
          onClick={handleViewValorBolsa}
          className="bg-green-600 text-white font-semibold py-3 px-6 rounded-full shadow-md"
        >
          Ver Valor en Bolsa
        </button>
        <button
          onClick={handleComprarCotizaciones}
          className="bg-yellow-600 text-white font-semibold py-3 px-6 rounded-full shadow-md"
        >
          Comprar Cotizaciones
        </button>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white font-semibold py-3 px-6 rounded-full shadow-md"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default Home;
