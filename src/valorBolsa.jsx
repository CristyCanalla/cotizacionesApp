const ValorBolsa = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <h1 className="text-4xl font-bold mb-6 text-gray-700">Valor en Bolsa</h1>
        <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
          <p className="text-xl font-semibold mb-4 text-gray-700">Valor Actual: $1500</p>
          <p className="text-gray-700 mb-4">El valor de las acciones ha tenido un incremento del 5% este mes.</p>
          <button
            onClick={() => window.history.back()}
            className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-md"
          >
            Volver
          </button>
        </div>
      </div>
    );
  };
  
  export default ValorBolsa;
  