// Register.jsx
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig"; // Asegúrate de tener la configuración de Firebase
import { useNavigate } from "react-router-dom"; // Importamos useNavigate para navegar entre rutas

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Hook para redirigir

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Cuenta creada exitosamente");
      navigate("/login"); // Redirige a login después de crear la cuenta
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoBack = () => {
    navigate("/"); // Redirige a la pantalla de bienvenida
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6">Crear Cuenta</h1>
      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
      <input
  type="email"
  placeholder="Correo electrónico"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-blue-500 focus:border-blue-500"
/>
<input
  type="password"
  placeholder="Contraseña"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-800 focus:ring-blue-500 focus:border-blue-500"
/>
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-full w-full"
        >
          Crear Cuenta
        </button>
      </form>
      <button
        onClick={handleGoBack}
        className="mt-6 bg-gray-500 text-white font-semibold py-3 px-6 rounded-full w-full"
      >
        Volver
      </button>
    </div>
  );
};

export default Register;
