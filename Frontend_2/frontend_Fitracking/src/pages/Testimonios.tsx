import { Users, Dumbbell, Star } from 'lucide-react';

const testimonials = [
  {
    name: "María García",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200",
    role: "Cliente desde 2022",
    testimonial: "Gracias a FitTracking logré perder 15kg en 6 meses de manera saludable. La aplicación me ayudó a mantener un registro detallado de mis entrenamientos, alimentación y progreso.",
    logro: "-15kg",
    tiempo: "6 meses"
  },
  {
    name: "Carlos Rodríguez",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200",
    role: "Cliente desde 2023",
    testimonial: "Increíble herramienta para seguir mi progreso. He aumentado mi masa muscular y mejorado mi rendimiento en el gimnasio significativamente.",
    logro: "+8kg músculo",
    tiempo: "8 meses"
  },
  {
    name: "Ana Martínez",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
    role: "Cliente desde 2021",
    testimonial: "FitTracking transformó mi relación con el ejercicio. La facilidad para registrar mis entrenamientos y ver mi progreso me mantiene motivada.",
    logro: "Cambio estilo de vida",
    tiempo: "2 años"
  }
];

const stats = [
  {
    value: "10,000+",
    label: "Usuarios activos",
    icon: Users
  },
  {
    value: "95%",
    label: "Tasa de éxito",
    icon: Star
  },
  {
    value: "500+",
    label: "Rutinas personalizadas",
    icon: Dumbbell
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <div className="bg-green-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Historias de éxito
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
            Descubre cómo FitTracking está transformando vidas a través del fitness y la salud
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-4">
                <stat.icon className="w-12 h-12 text-green-600" />
              </div>
              <div className="text-4xl font-bold text-green-800 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-green-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{testimonial.testimonial}</p>
                <div className="flex justify-between items-center border-t pt-4">
                  <div className="text-green-700 font-semibold">
                    Logro: {testimonial.logro}
                  </div>
                  <div className="text-gray-500">
                    Tiempo: {testimonial.tiempo}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-800 text-white py-16 px-4 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Comienza tu historia de éxito hoy
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Únete a miles de personas que ya han transformado sus vidas con FitTracking
          </p>
          <button             onClick={() => (window.location.href = "/UserHome")}
 className="bg-white text-green-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-100 transition-colors duration-300">
            Empieza ahora
            
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;