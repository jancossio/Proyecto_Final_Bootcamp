import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import SeguimientoPeso from './SeguimientoPeso'; // Este es el componente del gráfico

const App = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="nav-list">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/seguimiento-peso">Seguimiento de Peso</Link></li>
          <li><Link to="/planificador-dieta">Planificador de dieta</Link></li>
          <li><Link to="#Quienes-somos">¿Quiénes somos?</Link></li>
          <li><Link to="#Contacto">Contáctanos</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Bienvenido a FitTracking</h1>} />
        <Route path="/seguimiento-peso" element={<SeguimientoPeso />} />
        {/* Otras rutas */}
      </Routes>
    </div>
  );
};

export default App;
