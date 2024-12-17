import React from "react";
import { HealthFormData, Recomendacion } from "../types/health";
import { AlertCircle, CheckCircle, Info } from "lucide-react";

interface Props {
  datos: HealthFormData; // Datos del usuario
}

const Recomendaciones = ({ datos }: Props) => {
  const recomendaciones: Recomendacion[] = React.useMemo(() => {
    const resultados: Recomendacion[] = [];
    const alturaEnMetros = datos.altura / 100;
    const imc = datos.peso / (alturaEnMetros * alturaEnMetros);
    const caloriasMantenimiento = Math.round(1.3 * datos.peso * 24);
    let ajusteCalorico = "";

    // Ajuste calórico basado en IMC
    if (imc < 18.5) {
      ajusteCalorico =
        "${datos.nombre}, deberías aumentar entre 200 y 400 calorías diarias para ganar peso de manera saludable.";
    } else if (imc >= 25) {
      ajusteCalorico =
        "Deberías reducir entre 200 y 400 calorías diarias para perder peso de manera saludable.";
    } else {
      ajusteCalorico = "Tus calorías están en el rango adecuado. Mantén tu consumo actual.";
    }

    // Recomendación de IMC (peso)
    if (imc < 18.5) {
      resultados.push({
        tipo: "advertencia",
        mensaje:
          `${datos.nombre}, tu IMC indica bajo peso. Considera aumentar tu ingesta calórica y consultar con un nutricionista. 🍽️`,
        categoria: "nutricion",
      });
    } else if (imc >= 25 && imc < 30) {
      resultados.push({
        tipo: "advertencia",
        mensaje:
           `${datos.nombre}, tu IMC indica sobrepeso. Realiza ejercicio regularmente y ajusta tu dieta. 🏃‍♂️`,
        categoria: "nutricion",
      });
    } else if (imc >= 30) {
      resultados.push({
        tipo: "error",
        mensaje:
           `${datos.nombre}, tu IMC indica obesidad. Es importante consultar con un profesional de salud. 💊`,
        categoria: "medico",
      });
    } else {
      resultados.push({
        tipo: "exito",
        mensaje: `${datos.nombre},Tu IMC está en un rango saludable! Sigue cuidando tu cuerpo. 🥗`,
        categoria: "nutricion",
      });
    }

    // Calorías sugeridas con ajuste calórico
    resultados.push({
      tipo: "info",
      mensaje: `Según tu peso, tu consumo de calorías es de: ${caloriasMantenimiento} calorías. ${ajusteCalorico}`,
      categoria: "nutricion",
    });

    // Consumo de agua y actividad física combinada
    let vasosRecomendados = 8;
    if (datos.nivelActividad === "moderado") {
      vasosRecomendados += 2;
    } else if (datos.nivelActividad === "activo") {
      vasosRecomendados += 4;
    }

    if (datos.consumoAgua < vasosRecomendados) {
      resultados.push({
        tipo: "advertencia",
        mensaje: `Estás realizando ejercicio, pero bebes menos de ${vasosRecomendados} vasos de agua. Aumenta tu consumo para una hidratación adecuada. 💧`,
        categoria: "nutricion",
      });
    } else {
      resultados.push({
        tipo: "exito",
        mensaje: `¡Excelente! Estás bien hidratado con ${datos.consumoAgua} vasos de agua al día. Sigue así. 💧`,
        categoria: "nutricion",
      });
    }

    // Sueño
    if (datos.horasSueno < 7) {
      resultados.push({
        tipo: "advertencia",
        mensaje:
          `${datos.nombre}, duermes menos de 7 horas. Esto puede aumentar tus niveles de cortisol, la hormona del estrés. Asegúrate de descansar lo suficiente y dormir entre 7 y 8 horas por la noche para evitar el agotamiento y mantener el equilibrio emocional. 🛋🌙`,
        categoria: "estilo-vida",
      });
    } else if (datos.horasSueno >= 8) {
      resultados.push({
        tipo: "exito",
        mensaje:
          `¡Excelente ${datos.nombre}! Estás durmiendo las horas recomendadas (8 horas), lo que contribuye a mejorar tu bienestar general y reducir el estrés. 🌙✨`,
        categoria: "estilo-vida",
      });
    }

    // Actividad física
    if (datos.nivelActividad === "sedentario" && datos.objetivos.includes("weight_loss")) {
      resultados.push({
        tipo: "advertencia",
        mensaje:
          "Tu nivel de actividad es bajo. Levántate cada hora, estírate y realiza pequeñas caminatas. 🏃‍♂️",
        categoria: "ejercicio",
      });
     }else if (datos.nivelActividad === "sedentario" && datos.objetivos.includes("muscle_gain")) {
        resultados.push({
          tipo: "advertencia",
          mensaje:
            "Tu nivel de actividad es bajo y tu objetivo es ganar musculo. Hora de hacerte un plan de ejercicios de fuerza. 🏋️‍♀️",
          categoria: "ejercicio",
        });
      }else if (datos.nivelActividad === "moderado" && datos.objetivos.includes("muscle_gain")) {
        resultados.push({
          tipo: "advertencia",
          mensaje:
            "Tu nivel de actividad es moderado y tu objetivo es ganar musculo. Mejora el plan de ejercicios. 🏋️‍♀️",
          categoria: "ejercicio",
        });
    } else if (datos.nivelActividad === "moderado" && datos.objetivos.includes("weight_loss")) {
      resultados.push({
        tipo: "info",
        mensaje:
          "Tienes un nivel de actividad moderado. Aún así, ves a plan de ejercicios para mejorarlo. 💪",
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
    if (datos.alergias && datos.alergias.length > 0 && !datos.alergias.includes("ninguna")) {
      resultados.push({
        tipo: "info",
        mensaje: `Evita los alimentos que contengan: ${datos.alergias.join(", ")}. ¡Cuida tu salud! En la herramienta de dietas podrás encontrar platos sin esos nutrientes 🚫🍽️`,
        categoria: "nutricion",
      });
    }

    if (datos.preferenciasDieta.includes("vegan")) {
      resultados.push({
        tipo: "info",
        mensaje: "Como sigues una dieta vegana, asegúrate de obtener suficiente proteína de legumbres, frutos secos y verduras de hoja verde. Suplemento B12 puede ser necesario. 🌿🥖",
        categoria: "nutricion",
      });
    }
    if (datos.preferenciasDieta.includes("vegetarian")) {
      resultados.push({
        tipo: "info",
        mensaje: "Tu dieta vegetariana necesita un buen equilibrio de huevos, lácteos y fuentes vegetales de proteínas. Suplemento B12 puede ser necesario. 🥜🍽️",
        categoria: "nutricion",
      });
    }
    if (datos.preferenciasDieta.includes("cetonica")) {
      resultados.push({
        tipo: "info",
        mensaje: "Al seguir una dieta cetogénica, prioriza grasas saludables y controla tu consumo de carbohidratos. 🥐🍼",
        categoria: "nutricion",
      });
    }
    return resultados;
  }, [datos]);

  const getIcon = (tipo: Recomendacion["tipo"]) => {
    switch (tipo) {
      case "exito":
        return <CheckCircle style={{ color: "#38a169", marginRight: "10px" }} />;
      case "advertencia":
        return <AlertCircle style={{ color: "#d69e2e", marginRight: "10px" }} />;
      case "error":
        return <AlertCircle style={{ color: "#e53e3e", marginRight: "10px" }} />;
      default:
        return <Info style={{ color: "#3182ce", marginRight: "10px" }} />;
    }
  };

  return (
    <div
      style={{
        margin: "0",
        padding: "0",
        height: "100vh",
        width: "100vw",
        backgroundImage: "url('/images/fotofrutas.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          width: "90%",
          maxWidth: "700px",
          maxHeight: "90vh",
          overflowY: "auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "700",
            color: "#38a169",
            marginBottom: "20px",
            textShadow: "1px 1px 4px rgba(255, 255, 255, 0.98)",
          }}
        >
           Recomendaciones de Salud
           
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          {recomendaciones.map((rec, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#f0fdf4",
                padding: "12px",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(81, 214, 40, 0.1)",
              }}
            >
              {getIcon(rec.tipo)}
              <p style={{ color: "#2d3748", fontSize: "1rem", textAlign: "left" }}>
                {rec.mensaje}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recomendaciones;
