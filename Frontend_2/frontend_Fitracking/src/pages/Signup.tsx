//import React from 'react';  // Import useEffect from React
import '../styles/Signup.css'; 

const Signup = () => {
  
    return (
      <main id='signup-page'>
        <a href="/">
            <img src="../../public/images/favicon.png" alt="logo" className="signup-logo"/>
        </a>
        <div className="container">
        <div className="heading">Regístrate</div>

        <form action="" className="form">

            <input
            //required=""
            className="input"
            type="email"
            name="email"
            id="email"
            placeholder="Correo electrónico"
            />
            <input
            //required=""
            className="input"
            type="password"
            name="password"
            id="password"
            placeholder="Contraseña"
            />
            <input
            //required=""
            className="input"
            type="password"
            name="password"
            id="confirmPassword"
            placeholder="Repite la contraseña"
            />

            <input className="signup-button" type="submit" value="Registrate" />
        </form>
        <span className="signup">Ya tienes cuenta? <a href="/Login">Inicia sesión</a></span>
        </div>

        </main>
    );
  }
  
  export default Signup
  