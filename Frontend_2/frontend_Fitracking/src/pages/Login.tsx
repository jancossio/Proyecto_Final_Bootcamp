import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/useUserContext";
import "../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook para navegación
  const { setUser } = useUserContext(); // Accede a `setUser` para guardar el usuario

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",  // Include cookies in the request
        body: JSON.stringify({ email, password }),
        
      });
  
      if (!response.ok) {
        // Handle non-JSON error responses
        const errorText = await response.text();
        throw new Error(errorText || "Login failed");
      }
  
      const userData = await response.json(); // Ensure this contains `id` and `name`
      console.log("API response:", userData); // Check API response in the browser console
    
      setUser({ id: userData.id, name: userData.name }); // Set the user context
      console.log("User set in context:", { id: userData.id, name: userData.name });
    
      navigate("/UserHome");
    } catch (err) {
      console.error("Login error:", err);
      alert("Login failed. Please try again.");
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