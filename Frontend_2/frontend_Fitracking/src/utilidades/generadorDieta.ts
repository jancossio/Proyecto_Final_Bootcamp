import { MapaPorcentajes, Receta } from '../types/tipos';
import { RECETAS } from '../datos/recetas';

const calcularDiferenciaNutrientes = (
  objetivo: MapaPorcentajes,
  receta: MapaPorcentajes
): number => {
  return Object.entries(objetivo).reduce((total, [nutriente, porcentaje]) => {
    const diferencia = Math.abs(porcentaje - (receta[nutriente] || 0));
    return total + diferencia;
  }, 0);
};

export const generarSugerencias = (porcentajes: MapaPorcentajes): Receta[] => {
  // Ordenar recetas por similitud con los porcentajes objetivo
  const recetasOrdenadas = [...RECETAS].sort((a, b) => {
    const diferenciaA = calcularDiferenciaNutrientes(porcentajes, a.distribucionNutrientes);
    const diferenciaB = calcularDiferenciaNutrientes(porcentajes, b.distribucionNutrientes);
    return diferenciaA - diferenciaB;
  });

  // Devolver las 2 mejores coincidencias
  return recetasOrdenadas.slice(0, 2);
};

export const generarSugerenciasAleatorias = (): Receta[] => {
  const recetasAleatorias = [...RECETAS]
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);
  
  return recetasAleatorias;
};