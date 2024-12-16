import { useEffect } from 'react'; // Only import what you use
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import '../styles/Home.css';

const UserHome: React.FC = () => {
  const { user, isLoading } = useAuth(); // Access user and loading state
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !user) {
      // If user is null and loading is finished, redirect to Login
      navigate("/Login");
    }
  }, [user, isLoading, navigate]);

  if (isLoading) {
    // Show a loading spinner while checking the session
    return <div>Loading...</div>;
  }

  if (!user) {
    // Prevent rendering UserHome if user is null
    return null;
  }

  return (
    <main id="home-page">
      <nav className="navbar">
        <ul className="nav-list gap-10">
          <li>
            <a href="">
              <img
                src="../public/images/favicon.png"
                alt="logo"
                className="logo-home"
              />
            </a>
          </li>
          <li>
            <a href="/Recomendacion" className="nav-item">
              Recomendación
            </a>
          </li>
          <li>
            <a href="/Planificador_de_dieta" className="nav-item">
              Planificador de dieta
            </a>
          </li>
          <li>
            <a href="/Seguimiento_de_peso" className="nav-item">
              Seguimiento de peso
            </a>
          </li>
        </ul>
      </nav>
      <img
        className="portada"
        src="../../public/images/portada.jpeg"
        alt="fotoportada"
      />
      <div className="textoportada">FitTracking</div>
      <div className="esloganportada">Nutrición y hábitos saludables</div>
      <footer>© Todos los derechos reservados FitTracking</footer>
    </main>
  );
};

export default UserHome;