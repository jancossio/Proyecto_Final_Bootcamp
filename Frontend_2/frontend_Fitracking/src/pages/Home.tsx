import React, { useEffect } from "react";

import "../styles/Home.css";

import { Heart, Brain, Target } from "lucide-react";

import { Phone, Mail, Clock } from "lucide-react";


const Home = () => {

  useEffect(() => {

    // Wait for the DOM to load

    const appearElements = document.querySelectorAll(".appear");


    // Create the IntersectionObserver

    const observer = new IntersectionObserver(

      (entries, observer) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target); // Stop observing once the element has been shown

          }

        });

      },

      {

        threshold: 0.2, // When 20% of the element is visible, the effect triggers

      }

    );


    // Observe each element with the 'appear' className

    appearElements.forEach((element) => observer.observe(element));


    // Cleanup function to stop observing when the component unmounts

    return () => {

      appearElements.forEach((element) => observer.unobserve(element));

    };

  }, []);


  return (

    <main id="home-page">

      <nav className="navbar">

        <ul className="nav-list gap-9">

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

            <a href="/Login" className="nav-item">

              Recomendaciones

            </a>

          </li>

          <li>

            <a href="/Login" className="nav-item">

              Planificador de dieta

            </a>

          </li>

          <li>

            <a href="/Login" className="nav-item">

              Planificador de ejercicio

            </a>

          </li>

          <li>

            <a href="/Login" className="nav-item">

              Seguimiento de peso

            </a>

          </li>
          <li>

            <a href="/Login" className="nav-item">

              Testimonios

            </a>

          </li>


          <li>

            <a href="#sobrenosotros" className="nav-item">

              Sobre nosotros

            </a>

          </li>

          <li>

            <a href="#Contacto" className="nav-item">

              Contáctanos

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

      <div className="centrar">

        {" "}

        <a href="/Login" className="nav-item login-button-home">

          Iniciar sesión

        </a>

        <a href="/SignUp" className="nav-item signup-button-home ">

          Regístrate

        </a>

      </div>

      <div className="min-h-screen bg-gray-100">

        {/* About Us Hero Section */}

        <div className="separacion bg-gray-100 " id="sobrenosotros"></div>

        <div className="relative h-[400px] overflow-hidden">

          <img

            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"

            alt="Healthy lifestyle"

            className="w-full h-full object-cover"

          />

          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">

            <div className="text-center text-white">

              <h1 className="text-4xl font-bold mb-4">Sobre nosotros</h1>

              <p className="text-xl max-w-2xl mx-auto px-4">

                Transformamos vidas a través de la nutrición y el bienestar

                integral

              </p>

            </div>

          </div>

        </div>


        {/* Core Values Section */}

        <div className="max-w-7xl mx-auto px-4 py-16">

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-lg shadow-md text-center">

              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">

                <Heart className="w-8 h-8 text-green-600" />

              </div>

              <h3 className="text-xl font-semibold mb-2">

                Compromiso con tu salud

              </h3>

              <p className="text-gray-600">

                Nos dedicamos a proporcionar soluciones personalizadas para tu

                bienestar integral.

              </p>

            </div>


            <div className="bg-white p-6 rounded-lg shadow-md text-center">

              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">

                <Brain className="w-8 h-8 text-green-600" />

              </div>

              <h3 className="text-xl font-semibold mb-2">

                Experiencia profesional

              </h3>

              <p className="text-gray-600">

                Nuestro equipo de expertos está comprometido con tu

                transformación y éxito.

              </p>

            </div>


            <div className="bg-white p-6 rounded-lg shadow-md text-center">

              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">

                <Target className="w-8 h-8 text-green-600" />

              </div>

              <h3 className="text-xl font-semibold mb-2">

                Resultados comprobados

              </h3>

              <p className="text-gray-600">

                Historias de éxito que demuestran la efectividad de nuestros

                programas.

              </p>

            </div>

          </div>

        </div>


        {/* Main Content */}

        <div className="max-w-4xl mx-auto px-4 py-12">

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">

            <div className="md:flex">

              <div className="md:w-1/2">

                <img

                  src="https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"

                  alt="Team working"

                  className="w-full h-full object-cover"

                />

              </div>

              <div className="p-8 md:w-1/2">

                <h2 className="text-2xl font-bold mb-4">Nuestra misión</h2>

                <p className="text-gray-600 mb-6">

                  En FitTracking, nos apasiona transformar vidas a través de la

                  nutrición y la promoción de hábitos de vida saludables.

                  Nuestro equipo está compuesto por expertos en nutrición,

                  bienestar y salud, quienes trabajan con dedicación para crear

                  soluciones accesibles y sostenibles.

                </p>

                <p className="text-gray-600">

                  Creemos firmemente que el bienestar es un derecho universal y

                  que pequeñas decisiones diarias pueden generar grandes

                  cambios. Nuestro propósito es empoderar a las personas para

                  que tomen el control de su salud, inspirándolas a vivir con

                  energía, vitalidad y felicidad.

                </p>

              </div>

            </div>

          </div>

        </div>


        <div className="bg-gray-100 rounded-lg ">

          <div className="relative  w-full    h-[400px] overflow-hidden">

            <img

              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"

              alt="Contact us hero"

              className="w-full h-full object-cover"

            />

            <div

              className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"

              id="Contacto"

            >

              <div className="text-center text-white">

                <h1 className="text-4xl font-bold mb-4 ">Contáctanos</h1>

                <p className="text-xl max-w-2xl mx-auto px-4">

                  Estamos aquí para ayudarte en tu viaje hacia una vida más

                  saludable

                </p>

              </div>

            </div>

          </div>


          {/* Contact Information Cards */}

          <div className="max-w-7xl mx-auto px-4 py-16">

            <div className="grid md:grid-cols-3 gap-8">

              <div className="bg-white p-6 rounded-lg shadow-md text-center">

                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">

                  <Phone className="w-8 h-8 text-green-600" />

                </div>

                <h3 className="text-xl font-semibold mb-2">Teléfono</h3>

                <p className="text-gray-600">

                  +34 912 345 678

                  <br />

                  +34 623 456 789

                </p>

              </div>


              <div className="bg-white p-6 rounded-lg shadow-md text-center">

                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">

                  <Mail className="w-8 h-8 text-green-600" />

                </div>

                <h3 className="text-xl font-semibold mb-2">Email</h3>

                <p className="text-gray-600">

                  infofittracking@gmail.com

                  <br />

                  soportefittracking@gmail.com

                </p>

              </div>


              <div className="bg-white p-6 rounded-lg shadow-md text-center">

                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">

                  <Clock className="w-8 h-8 text-green-600" />

                </div>

                <h3 className="text-xl font-semibold mb-2">Horario</h3>

                <p className="text-gray-600">

                  Lun - Vie: 8:00 - 20:00

                  <br />

                  Sáb: 9:00 - 13:00

                </p>

              </div>

            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-10">

              <div className="p-8">

                <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>

                <form className="space-y-6">

                  <div className="grid md:grid-cols-2 gap-6">

                    <div>

                      <label className="block text-sm font-medium text-gray-700 mb-2">

                        Nombre

                      </label>

                      <input

                        type="text"

                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"

                        placeholder="Tu nombre"

                      />

                    </div>

                    <div>

                      <label className="block text-sm font-medium text-gray-700 mb-2">

                        Email

                      </label>

                      <input

                        type="email"

                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"

                        placeholder="tu@email.com"

                      />

                    </div>

                  </div>

                  <div>

                    <label className="block text-sm font-medium text-gray-700 mb-2">

                      Asunto

                    </label>

                    <input

                      type="text"

                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"

                      placeholder="Asunto del mensaje"

                    />

                  </div>

                  <div>

                    <label className="block text-sm font-medium text-gray-700 mb-2">

                      Mensaje

                    </label>

                    <textarea

                      rows={4}

                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"

                      placeholder="Tu mensaje..."

                    ></textarea>

                  </div>

                  <div>

                    <div className="flex justify-center">

                      <button

                        type="submit"

                        className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors duration-200"

                      >

                        Enviar Mensaje

                      </button>

                    </div>

                  </div>

                </form>

              </div>

            </div>

            <div className="map-container mt-10">

              <iframe

                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1263.2826075007067!2d1.129206921746842!3d41.143053611311544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a150ce6ede5e3d%3A0x6f52c04b721894bd!2sAv.%20Bellissens%2C%2042%2C%20oficina%20111%2C%2043204%20Reus%2C%20Tarragona!5e0!3m2!1ses!2ses!4v1734223394965!5m2!1ses!2ses"

                allowFullScreen

                loading="lazy"

                referrerPolicy="no-referrer-when-downgrade"

                title="Ubicación de FitTracking"

                width="600"

                height="450"

                style={{ border: 0 }}

              ></iframe>


              <a

                href={`https://www.google.com/maps/search/?api=1&query=${location},${location}`}

                className="map-link"

                target="_blank"

                rel="noopener noreferrer"

                aria-label="Abrir en Google Maps"

              />

            </div>

            <ul className="wrapper">

              <li className="icon facebook">

                <a href="https://www.facebook.com" target="_blank">

                  <span className="tooltip">Facebook</span>

                  <svg

                    viewBox="0 0 320 512"

                    height="1.2em"

                    fill="currentColor"

                    xmlns="http://www.w3.org/2000/svg"

                  >

                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>

                  </svg>

                </a>

              </li>

              <li className="icon twitter">

                <a href="https://twitter.com" target="_blank">

                  <span className="tooltip">Twitter</span>

                  <svg

                    height="1.8em"

                    fill="currentColor"

                    viewBox="0 0 48 48"

                    xmlns="http://www.w3.org/2000/svg"

                    className="twitter"

                  >

                    <path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path>

                  </svg>

                </a>

              </li>

              <li className="icon instagram">

                <a href="https://www.instagram.com" target="_blank">

                  <span className="tooltip">Instagram</span>

                  <svg

                    xmlns="http://www.w3.org/2000/svg"

                    height="1.2em"

                    fill="currentColor"

                    className="bi bi-instagram"

                    viewBox="0 0 16 16"

                  >

                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923
 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926
 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047
 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48
 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988
 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>

                  </svg>

                </a>

              </li>

              <li className="icon email">

                <a href="mailto:example@email.com" target="_blank">

                  <span className="tooltip">Email</span>

                  <svg

                    xmlns="http://www.w3.org/2000/svg"

                    height="1.2em"

                    fill="currentColor"

                    className="bi bi-envelope"

                    viewBox="0 0 16 16"

                  >

                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-6.64 3.983a.5.5 0 0 1-.72 0L1 5.383V12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5.383z" />

                  </svg>

                </a>

              </li>

            </ul>

          </div>

        </div>

      </div>


      <footer>© Todos los derechos reservados FitTracking</footer>

    </main>

  );

};


export default Home;