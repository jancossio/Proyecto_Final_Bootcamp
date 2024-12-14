import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from "../context/useUserContext";
import '../styles/Home.css';

const UserHome = () => {
  const { user } = useUserContext(); // Obtén el contexto del usuario
  const navigate = useNavigate();

  useEffect(() => {
    // Redirige a Login si no hay un usuario autenticado
    if (!user || !user.id) {
      navigate('/Login');
    }

    const appearElements = document.querySelectorAll('.appear');

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    appearElements.forEach((element) => observer.observe(element));

    return () => {
      appearElements.forEach((element) => observer.unobserve(element));
    };
  }, [user, navigate]);

  return (
    <main id="home-page">
      <nav className="navbar">
        <ul className="nav-list">
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