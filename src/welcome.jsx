import { useNavigate } from "react-router-dom";
    import { auth, provider } from "./firebaseConfig";
    import { signInWithPopup } from "firebase/auth";

    const Welcome = () => {
        const navigate = useNavigate();

        const handleGoogleSignIn = async () => {
            try {
                await signInWithPopup(auth, provider);
                navigate("/home");
            } catch (error) {
                console.error("Error en autenticación con Google:", error);
            }
        };

        const handleCreateAccount = () => {
            navigate("/register");
        };

        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white p-6">
            <h1 className="text-5xl font-extrabold mb-8 text-center">
                ¡Bienvenido a Mi App!
            </h1>
            <p className="text-xl mb-6 text-center">
                Para comenzar, selecciona una opción:
            </p>
        
            <div className="space-y-6 w-full max-w-md">
                <button
                    onClick={handleGoogleSignIn}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Iniciar sesión con Google
                </button>
        
                <button
                    onClick={handleCreateAccount}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Crear cuenta
                </button>
            </div>
        </div>
        );
    };

    export default Welcome;