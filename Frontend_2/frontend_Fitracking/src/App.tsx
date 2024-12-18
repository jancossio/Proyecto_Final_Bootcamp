import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';  
import Home from './pages/Home';
import {Sign_up} from './pages/Signup';
import Login from './pages/Login';
import Asesor_salud from './pages/Asesor_salud';
import Seguimiento_peso from './pages/Seguimiento_peso';
import Planificador_dieta from './pages/Planificador_de_dieta';
<<<<<<< HEAD
import Planificador_ejercicio from './pages/Planificador_de_ejercicio';

=======
// import Planificador_ejercicio from './pages/Planificador_ejercicio';
import Recomendaciones from './pages/Recomendaciones';
// import Resultados from './pages/Resultados';
>>>>>>> b26994c805a1c7672bd4c06f7301cbecac848f1b

function App() {

  return (
    <Router> {/* Wrap your Routes with BrowserRouter */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<Sign_up />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Asesor_de_salud" element={<Asesor_salud/>} />
        <Route path="/Seguimiento_de_peso" element={<Seguimiento_peso/>} />
        <Route path="/Planificador_de_dieta" element={<Planificador_dieta/>} />
        <Route path="/Planificador_de_ejercicio" element={<Planificador_ejercicio/>} />
      </Routes>
    </Router>
  );
}

export default App;
