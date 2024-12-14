import React from 'react';
import { AlertCircle, CheckCircle, Info } from 'lucide-react';
import { HealthFormData, Recomendacion} from '../types/health';

interface Props {
  recomendacion: Recomendacion;
  datos: HealthFormData;
  
}

export default function Recomendacion({ recomendacion }: Props) {
  const getIcono = () => {
    switch (recomendacion.tipo) {
      case 'exito':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'advertencia':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Info className="w-5 h-5 text-blue-500" />;
    }
  };

  const getColorFondo = () => {
    switch (recomendacion.tipo) {
      case 'exito':
        return 'bg-green-50';
      case 'advertencia':
        return 'bg-yellow-50';
      case 'error':
        return 'bg-red-50';
      default:
        return 'bg-blue-50';
    }
  };

  return (
    <div className={`p-4 rounded-lg flex items-start gap-3 ${getColorFondo()}`}>
      {getIcono()}
      <p className="text-gray-700">{recomendacion.mensaje}</p>
    </div>
  );
}