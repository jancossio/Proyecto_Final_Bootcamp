import { addMonths, startOfMonth } from 'date-fns';

export function obtenerFechaInicial(): Date {
  return new Date(2024, 11, 1); // 1 de diciembre de 2023
}

export function generarFechaMensual(fechaAnterior: Date): Date {
  return addMonths(startOfMonth(fechaAnterior), 1);
}