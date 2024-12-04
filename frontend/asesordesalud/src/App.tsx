import React from 'react';
import { Heart } from 'lucide-react';
import FormularioSalud from './components/FormularioSalud';
import Recomendaciones from './components/Recomendaciones';
import { HealthFormData } from './types/health';

function App() {
  const [datosFormulario, setDatosFormulario] = React.useState<HealthFormData | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Heart className="w-8 h-8 text-red-600" />
            <h1 className="text-3xl font-bold text-gray-900">Asesor de salud</h1>
          </div>
          <p className="text-gray-600">Completa el cuestionario para recibir recomendaciones personalizadas de salud</p>
        </div>

        {!datosFormulario ? (
          <FormularioSalud onSubmit={setDatosFormulario} />
        ) : (
          <div className="space-y-6">
            <Recomendaciones datos={datosFormulario} />
            <button
              onClick={() => setDatosFormulario(null)}
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-200"
            >
              Comenzar de Nuevo
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;