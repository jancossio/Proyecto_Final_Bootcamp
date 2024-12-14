import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserProvider";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import UserHome from "./pages/UserHome";
import Recomendacion from "./pages/Recomendacion";
import PlanificadorDieta from "./pages/Planificador_de_dieta";
import SeguimientoPeso from "./pages/Seguimiento_peso";
import ProtectedRoute from "./components/ProtectedRoute";

const App: React.FC = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/UserHome" element={<UserHome />} />
            <Route path="/Recomendacion" element={<Recomendacion />} />
            <Route path="/Planificador_de_dieta" element={<PlanificadorDieta />} />
            <Route path="/Seguimiento_de_peso" element={<SeguimientoPeso />} />
          </Route>
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;