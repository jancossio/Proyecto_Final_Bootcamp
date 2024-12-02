function generarRecomendaciones() {
    const nombre = document.getElementById("nombre").value;
    const edad = parseInt(document.getElementById("edad").value);
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const actividad = parseInt(document.getElementById("actividad").value);
    const agua = parseInt(document.getElementById("agua").value);
    const alergias = document.getElementById("alergias").value;

    const recomendaciones = [];
    const imc = peso / (altura * altura);

    // Recomendaciones de IMC
    if (imc < 18.5) {
        recomendaciones.push("Tienes bajo peso. Consulta con un nutricionista.");
    } else if (imc >= 18.5 && imc <= 24.9) {
        recomendaciones.push("Tienes un peso saludable. Mantén una dieta equilibrada y ejercicio regular.");
    } else if (imc >= 25 && imc <= 29.9) {
        recomendaciones.push("Tienes sobrepeso. Considera una dieta balanceada y actividad física.");
    } else {
        recomendaciones.push("Tienes obesidad. Consulta a un médico.");
    }

    // Recomendaciones de actividad física
    if (actividad < 30) {
        recomendaciones.push("Realiza al menos 30 minutos de actividad física diaria.");
    } else {
        recomendaciones.push("Tu nivel de actividad física es adecuado. ¡Sigue así!");
    }

    // Recomendaciones de consumo de agua
    if (agua < 8) {
        recomendaciones.push("Estás consumiendo poca agua. Intenta beber al menos 8 vasos al día.");
    } else {
        recomendaciones.push("Estás bien hidratado. Mantén este hábito.");
    }

    // Recomendaciones de alergias
    if (alergias.toLowerCase() !== "no") {
        recomendaciones.push(`Recuerda evitar los alérgenos conocidos: ${alergias}.`);
    } else {
        recomendaciones.push("No reportas alergias conocidas. ¡Eso es genial!");
    }

    // Mostrar recomendaciones
    const output = document.getElementById("recomendaciones");
    output.innerHTML = `<h2>Recomendaciones para ${nombre}</h2>`;
    recomendaciones.forEach(rec => {
        output.innerHTML += `<p>- ${rec}</p>`;
    });
}
