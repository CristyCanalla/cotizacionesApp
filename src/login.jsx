// Login.jsx
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebaseConfig"; // Asegúrate de tener la configuración de Firebase

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/home");
    } catch (error) {
      console.error("Error en autenticación:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6">Iniciar Sesión</h1>
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out"
      >
        Iniciar sesión con Google
      </button>
    </div>
  );
};

export default Login;
