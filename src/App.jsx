import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./welcome";
import Login from "./Login";
import Register from "./register";
import Home from "./home";
import Cotizaciones from "./cotizaciones";
import ValorBolsa from "./valorBolsa";
import ComprarCotizaciones from "./comprarCotizaciones";
import './index.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cotizaciones" element={<Cotizaciones />} />
        <Route path="/valor-bolsa" element={<ValorBolsa />} />
        <Route path="/comprar-cotizaciones" element={<ComprarCotizaciones />} />
      </Routes>
    </Router>
  );
}

export default App;
