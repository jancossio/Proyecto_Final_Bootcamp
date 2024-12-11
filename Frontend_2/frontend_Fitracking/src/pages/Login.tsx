
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Navigate to the home page on success
        navigate("/");
      } else {
        console.error("Login failed"); // Log the error if needed
      }
    } catch (err) {
      console.error("Network error:", err);
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
      </div>
    </main>
  );
};

export default Login;