import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';  // Main CSS file for global styles
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Asesor_salud from './pages/Asesor_salud';
import Seguimiento_peso from './pages/Seguimiento_peso';
//import NotFound from './pages/Seguimiento_peso';

function App() {

  return (
    <Router> {/* Wrap your Routes with BrowserRouter */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Asesor_de_salud" element={<Asesor_salud/>} />
        <Route path="/Seguimiento_de_peso" element={<Seguimiento_peso/>} />
      </Routes>
    </Router>
  );
}

export default App;
