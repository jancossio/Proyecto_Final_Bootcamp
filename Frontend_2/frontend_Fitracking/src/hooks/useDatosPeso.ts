import { useState, useEffect, useCallback } from 'react';
import { DatosPeso } from '../types/weight';

export function useDatosPeso() {
  const [datosPeso, setDatosPeso] = useState<DatosPeso>(() => {
    const datosGuardados = localStorage.getItem('datosPeso');
    return datosGuardados
      ? JSON.parse(datosGuardados, (key, value) =>
          key === 'fecha' ? new Date(value) : value // Parsear fechas correctamente
        )
      : { registros: [] };
  });

  // Guardar en localStorage al actualizar
  useEffect(() => {
    localStorage.setItem('datosPeso', JSON.stringify(datosPeso));
  }, [datosPeso]);

  // Agregar un nuevo registro
  const agregarRegistro = useCallback((peso: number, fecha: Date) => {
    setDatosPeso(prevDatos => ({
      registros: [
        ...prevDatos.registros,
        { fecha, peso }
      ].sort((a, b) => a.fecha.getTime() - b.fecha.getTime()),
    }));
  }, []);

  // Reinicializar los datos
  const reinicializarDatos = useCallback(() => {
    setDatosPeso({ registros: [] }); // Vaciar el estado
    localStorage.removeItem('datosPeso'); // Limpiar localStorage
  }, []);

  return { datosPeso, agregarRegistro, reinicializarDatos };
}