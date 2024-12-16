import { Dumbbell, Star } from 'lucide-react';
import TestimonialCard from '../components/TestimonialCard';
import { testimonials } from '../datos/testimonials';

function App() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">

        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
              Historias de Éxito
            </h1>
            <p className="text-lg text-green-700 max-w-2xl mx-auto">
              Descubre cómo FitTracking ha ayudado a miles de personas a alcanzar sus objetivos fitness y transformar sus vidas.
            </p>
          </div>
        </section>
  
        {/* Stats */}
        <section className="bg-green-600 py-12 mb-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-center">
              <div>
                <div className="text-4xl font-bold mb-2">+10,000</div>
                <div className="text-green-100">Usuarios Activos</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-green-100">Tasa de Éxito</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">4.9</div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <div className="text-green-100">Calificación Promedio</div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Testimonials Grid */}
        <section className="container mx-auto px-4 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
        </section>
  
        {/* CTA Section */}
        <section className="bg-green-800 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              ¿Listo para comenzar tu transformación?
            </h2>
            <p className="mb-8 text-green-100 max-w-2xl mx-auto">
              Únete a miles de personas que ya han alcanzado sus metas fitness con FitTracking.
            </p>
            <button className="bg-white text-green-800 px-8 py-3 rounded-full font-semibold hover:bg-green-100 transition-colors">
              Comienza Ahora
            </button>
          </div>
        </section>
  
        {/* Footer */}
        <footer className="bg-green-900 text-green-100 py-8">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Dumbbell className="h-6 w-6" />
              <span className="text-xl font-bold">FitTracking</span>
            </div>
            <p className="text-sm">© 2024 FitTracking. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
    );
  }
  
  export default App;