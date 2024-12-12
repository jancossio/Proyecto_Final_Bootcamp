import '../styles/Login.css'; 

const Login = () => {
  return (
    <main id='login-page'>
      <a href="/">
        <img src="../../public/images/favicon.png" alt="logo" className="login-logo" />
      </a>
      <div className="container-login">
        <div className="heading-login">Iniciar sesión</div>
        <form className="login-form">
          <input
            required
            className="input"
            type="email"
            name="email"
            id="email"
            placeholder="Correo electrónico"
          />
          <input
            required
            className="input"
            type="password"
            name="password"
            id="password"
            placeholder="Contraseña"
          />
          <span className="forgot-password">
            <a href="#">Has olvidado la contraseña?</a>
          </span>
          <input className="login-button" type="submit" value="Iniciar sesión" />
          <span className="signup">
            No tienes cuenta? <a href="/SignUp">Regístrate</a>
          </span>
        </form>
      </div>
    </main>
  );
};

export default Login;