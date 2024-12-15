import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider"; // AuthProvider for managing user state
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import UserHome from "./pages/UserHome";
import Recomendacion from "./pages/Recomendacion";
import PlanificadorDieta from "./pages/Planificador_de_dieta";
import SeguimientoPeso from "./pages/Seguimiento_peso";
import PrivateRoute from "./components/PrivateRoute"; // PrivateRoute component for protected routes

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />

          {/* Protected Routes */}
          <Route
            path="/UserHome"
            element={
              <PrivateRoute>
                <UserHome />
              </PrivateRoute>
            }
          />
          <Route
            path="/Recomendacion"
            element={
              <PrivateRoute>
                <Recomendacion />
              </PrivateRoute>
            }
          />
          <Route
            path="/Planificador_de_dieta"
            element={
              <PrivateRoute>
                <PlanificadorDieta />
              </PrivateRoute>
            }
          />
          <Route
            path="/Seguimiento_de_peso"
            element={
              <PrivateRoute>
                <SeguimientoPeso />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;