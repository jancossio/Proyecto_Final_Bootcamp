import React from 'react';
import { HealthFormData, Recomendacion } from '../types/health';
import { AlertCircle, CheckCircle, Info } from 'lucide-react';

interface Props {
  datos: HealthFormData;
}

export default function Recomendaciones({ datos }: Props) {
  const recomendaciones: Recomendacion[] = React.useMemo(() => {
    const resultados: Recomendacion[] = [];
    
    // Calcular IMC
    const imc = datos.peso / (datos.altura * datos.altura);
    if (imc < 18.5) {
      resultados.push({
        tipo: 'advertencia',
        mensaje: 'Tu IMC indica que tienes bajo peso. Considera consultar a un nutricionista para un plan de alimentación personalizado.',
        categoria: 'nutricion'
      });
    } else if (imc >= 25 && imc < 30) {
      resultados.push({
        tipo: 'advertencia',
        mensaje: 'Tu IMC indica sobrepeso. Enfócate en una nutrición balanceada y ejercicio regular.',
        categoria: 'nutricion'
      });
    } else if (imc >= 30) {
      resultados.push({
        tipo: 'error',
        mensaje: 'Tu IMC indica obesidad. Te recomendamos consultar a un profesional de la salud.',
        categoria: 'medico'
      });
    } else {
      resultados.push({
        tipo: 'exito',
        mensaje: '¡Tu IMC está dentro del rango saludable! Mantén un estilo de vida equilibrado.',
        categoria: 'nutricion'
      });
    }

    // Recomendaciones de consumo de agua
    if (datos.consumoAgua < 8) {
      resultados.push({
        tipo: 'advertencia',
        mensaje: `Estás bebiendo ${datos.consumoAgua} vasos de agua al día. Intenta aumentar a al menos 8 vasos.`,
        categoria: 'nutricion'
      });
    } else {
      resultados.push({
        tipo: 'exito',
        mensaje: '¡Excelente trabajo manteniéndose hidratado!',
        categoria: 'nutricion'
      });
    }

    // Recomendaciones de sueño
    if (datos.horasSueno < 7) {
      resultados.push({
        tipo: 'advertencia',
        mensaje: 'Podrías no estar durmiendo lo suficiente. Intenta dormir entre 7-9 horas por noche.',
        categoria: 'estilo-vida'
      });
    } else if (datos.horasSueno > 9) {
      resultados.push({
        tipo: 'info',
        mensaje: 'Estás durmiendo más que el promedio. Si te sientes inusualmente cansado, considera consultar a un médico.',
        categoria: 'medico'
      });
    }

    // Nivel de estrés
    if (datos.nivelEstres > 7) {
      resultados.push({
        tipo: 'advertencia',
        mensaje: 'Tus niveles de estrés parecen ser altos. Considera técnicas de manejo del estrés o consultar a un profesional.',
        categoria: 'mental'
      });
    }

    // Nivel de actividad
    if (datos.nivelActividad === 'sedentario') {
      resultados.push({
        tipo: 'advertencia',
        mensaje: '¡Intenta incorporar más actividad física en tu rutina diaria! Puedes comenzar con caminatas cortas.',
        categoria: 'ejercicio'
      });
    }

    // Alergias y preferencias dietéticas
    if (datos.alergias && datos.alergias.toLowerCase() !== 'ninguna') {
      resultados.push({
        tipo: 'info',
        mensaje: `Recuerda siempre revisar las etiquetas de los alimentos debido a tus alergias: ${datos.alergias}`,
        categoria: 'nutricion'
      });
    }

    return resultados;
  }, [datos]);

  const getIcono = (tipo: Recomendacion['tipo']) => {
    switch (tipo) {
      case 'exito':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'advertencia':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Info className="w-5 h-5 text-green-500" />;
    }
  };

  const getColorFondo = (tipo: Recomendacion['tipo']) => {
    switch (tipo) {
      case 'exito':
        return 'bg-green-50';
      case 'advertencia':
        return 'bg-yellow-50';
      case 'error':
        return 'bg-red-50';
      default:
        return 'bg-green-50';
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Recomendaciones de salud para {datos.nombre}</h2>
      
      {recomendaciones.map((rec, index) => (
        <div
          key={index}
          className={`p-4 rounded-lg flex items-start gap-3 ${getColorFondo(rec.tipo)}`}
        >
          {getIcono(rec.tipo)}
          <p className="text-gray-700">{rec.mensaje}</p>
        </div>
      ))}
    </div>
  );
}