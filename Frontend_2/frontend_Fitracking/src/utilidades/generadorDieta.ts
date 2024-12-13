import { RECETAS } from '../datos/recetas';
import { MapaPorcentajes, Receta } from '../types/tipos';

// Función para obtener recetas aleatorias por tipo
const obtenerRecetaPorTipo = (tipo: 'desayuno' | 'comida' | 'cena'): Receta => {
  const recetasFiltradas = RECETAS.filter(receta => receta.tipoComida === tipo);
  return recetasFiltradas[Math.floor(Math.random() * recetasFiltradas.length)];
};

// Función para calcular la diferencia entre porcentajes nutricionales
const calcularDiferenciaNutrientes = (
  objetivo: MapaPorcentajes,
  receta: MapaPorcentajes
): number => {
  return Object.entries(objetivo).reduce((total, [nutriente, porcentaje]) => {
    const diferencia = Math.abs(porcentaje - (receta[nutriente] || 0));
    return total + diferencia;
  }, 0);
};

// Generar sugerencias basadas en porcentajes nutricionales
export const generarSugerencias = (porcentajes: MapaPorcentajes): Receta[] => {
  // Ordenar las recetas por similitud con los porcentajes objetivo
  const recetasOrdenadas = [...RECETAS].sort((a, b) => {
    const diferenciaA = calcularDiferenciaNutrientes(porcentajes, a.distribucionNutrientes);
    const diferenciaB = calcularDiferenciaNutrientes(porcentajes, b.distribucionNutrientes);
    return diferenciaA - diferenciaB;
  });

  // Seleccionar las mejores opciones por tipo de comida
  return [
    recetasOrdenadas.find(receta => receta.tipoComida === 'desayuno')!,
    recetasOrdenadas.find(receta => receta.tipoComida === 'comida')!,
    recetasOrdenadas.find(receta => receta.tipoComida === 'cena')!
  ];
};

// Generar sugerencias aleatorias
export const generarSugerenciasAleatorias = (): Receta[] => {
  return [
    obtenerRecetaPorTipo('desayuno'),
    obtenerRecetaPorTipo('comida'),
    obtenerRecetaPorTipo('cena')
  ];
};