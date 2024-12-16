import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"; // Updated to use your custom `useAuth` hook
import "../styles/Login.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth(); // Access `login` function from the AuthProvider

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await login(email, password); // Call the `login` function from the AuthProvider
      console.log("Login successful");
      navigate("/UserHome"); // Navigate to UserHome on successful login
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please check your email and password.");
    }
  };

  return (
    <main id="login-page">
      <a href="/">
        <img
          src="../../public/images/favicon.png"
          alt="logo"
          className="login-logo"
        />
      </a>
      <div className="container-login">
        <div className="heading-login">Iniciar sesión</div>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            required
            className="input"
            type="email"
            name="email"
            id="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            className="input"
            type="password"
            name="password"
            id="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input className="login-button" type="submit" value="Iniciar sesión" />
        </form>
        No tienes cuenta? <a href="/Signup" className="link">Regístrate aquí</a>
      </div>
    </main>
  );
};

export default Login;