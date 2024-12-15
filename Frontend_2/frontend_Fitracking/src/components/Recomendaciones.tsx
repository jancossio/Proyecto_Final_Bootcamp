import React from "react";
import { HealthFormData, Recomendacion } from "../types/health";
import { AlertCircle, CheckCircle, Info } from "lucide-react";

interface Props {
  datos: HealthFormData; // Datos del usuario
}

const Recomendaciones = ({ datos }: Props) => {
  const recomendaciones: Recomendacion[] = React.useMemo(() => {
    const resultados: Recomendacion[] = [];
    console.log(datos.peso);
    const imc = datos.peso / (datos.altura * datos.altura);
    console.log(imc);
    const caloriasMantenimiento = Math.round(1.3 * datos.peso * 24); // Cálculo simple de calorías

    // Recomendación de IMC (peso)
    if (imc < 18.5) {
      resultados.push({
        tipo: "advertencia",
        mensaje:
          "Tu IMC indica bajo peso. Considera aumentar tu ingesta calórica y consultar con un nutricionista. 🍽️",
        categoria: "nutricion",
      });
    } else if (imc >= 25 && imc < 30) {
      resultados.push({
        tipo: "advertencia",
        mensaje:
          "Tu IMC indica sobrepeso. Realiza ejercicio regularmente y ajusta tu dieta. 🏃‍♂️",
        categoria: "nutricion",
      });
    } else if (imc >= 30) {
      resultados.push({
        tipo: "error",
        mensaje:
          "Tu IMC indica obesidad. Es importante consultar con un profesional de salud. 💊",
        categoria: "medico",
      });
    } else {
      resultados.push({
        tipo: "exito",
        mensaje: "¡Tu IMC está en un rango saludable! Sigue cuidando tu cuerpo. 🥗",
        categoria: "nutricion",
      });
    }

    // Calorías sugeridas
    resultados.push({
      tipo: "info",
      mensaje: `Según tu peso, deberías consumir alrededor de ${caloriasMantenimiento} calorías al día para mantener tu peso. 🍎`,
      categoria: "nutricion",
    });

    // Consumo de agua y actividad física combinada
    if (datos.consumoAgua < 8 && datos.nivelActividad === "activo") {
      resultados.push({
        tipo: "advertencia",
        mensaje:
          "Estás realizando ejercicio, pero bebes menos de 8 vasos de agua. Aumenta tu consumo para una hidratación adecuada. 💧",
        categoria: "nutricion",
      });
    } else if (datos.consumoAgua >= 8) {
      resultados.push({
        tipo: "exito",
        mensaje: "¡Excelente! Estás bien hidratado, sigue así. 💧",
        categoria: "nutricion",
      });
    }

    // Sueño
    if (datos.horasSueno < 7) {
      resultados.push({
        tipo: "advertencia",
        mensaje:
          "Duermes menos de 7 horas. Asegúrate de descansar lo suficiente para evitar el agotamiento. 🛌",
        categoria: "estilo-vida",
      });
    } else {
      resultados.push({
        tipo: "exito",
        mensaje: "¡Muy bien! Estás durmiendo las horas recomendadas. 🌙",
        categoria: "estilo-vida",
      });
    }

    // Estrés con consejos adicionales
    if (datos.nivelEstres > 7) {
      resultados.push({
        tipo: "advertencia",
        mensaje:
          "Tus niveles de estrés son altos. Dedica tiempo a relajarte, evita el móvil antes de dormir y prueba meditación. 📱🧘‍♂️",
        categoria: "mental",
      });
    } else if (datos.nivelEstres > 4) {
      resultados.push({
        tipo: "info",
        mensaje:
          "Tu estrés es moderado. Sal a pasear, respira profundo y busca desconectar un poco. 🌳",
        categoria: "mental",
      });
    } else {
      resultados.push({
        tipo: "exito",
        mensaje: "¡Estás manejando bien el estrés! Sigue cuidando tu mente. 🧠✨",
        categoria: "mental",
      });
    }

    // Actividad física
    if (datos.nivelActividad === "sedentario") {
      resultados.push({
        tipo: "advertencia",
        mensaje:
          "Tu nivel de actividad es bajo. Levántate cada hora, estírate y realiza pequeñas caminatas. 🚶‍♂️",
        categoria: "ejercicio",
      });
    } else if (datos.nivelActividad === "moderat") {
      resultados.push({
        tipo: "info",
        mensaje:
          "Tienes una actividad moderada. Incorpora ejercicios de fuerza para un mejor resultado. 💪",
        categoria: "ejercicio",
      });
    } else {
      resultados.push({
        tipo: "exito",
        mensaje: "¡Excelente! Tu actividad física está en un nivel óptimo. 🏋️‍♀️",
        categoria: "ejercicio",
      });
    }

    // Alergias
    if (datos.alergias && datos.alergias.length > 0) {
      if (!datos.alergias.includes("ninguna")) {
        resultados.push({
          tipo: "info",
          mensaje: `Evita los alimentos que contengan: ${datos.alergias.join(", ")}. ¡Cuida tu salud! 🚫🍽️`,
          categoria: "nutricion",
        });
      }
    }

    return resultados;
  }, [datos]);

  const getIcon = (tipo: Recomendacion["tipo"]) => {
    switch (tipo) {
      case "exito":
        return <CheckCircle className="text-green-500 w-6 h-6" />;
      case "advertencia":
        return <AlertCircle className="text-yellow-500 w-6 h-6" />;
      case "error":
        return <AlertCircle className="text-red-500 w-6 h-6" />;
      default:
        return <Info className="text-blue-500 w-6 h-6" />;
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-600">
          Recomendaciones de Salud
        </h2>
        <div className="space-y-4">
          {recomendaciones.map((rec, index) => (
            <div
              key={index}
              className={`flex items-center p-4 rounded-md shadow-md bg-gray-100`}
            >
              {getIcon(rec.tipo)}
              <p className="ml-4 text-gray-700 text-base">{rec.mensaje}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recomendaciones;