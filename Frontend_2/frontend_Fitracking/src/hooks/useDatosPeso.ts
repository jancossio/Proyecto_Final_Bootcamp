import { useState, useCallback } from 'react';
import { DatosPeso } from '../types/weight';
import { obtenerFechaInicial, generarFechaMensual } from '../utilidades/dateUtils';

export function useDatosPeso() {
  const [datosPeso, setDatosPeso] = useState<DatosPeso>({
    registros: []
  });

  const agregarRegistro = useCallback((peso: number) => {
    setDatosPeso(prevDatos => {
      const nuevaFecha = prevDatos.registros.length === 0
        ? obtenerFechaInicial()
        : generarFechaMensual(prevDatos.registros[prevDatos.registros.length - 1].fecha);

      return {
        registros: [
          ...prevDatos.registros,
          { fecha: nuevaFecha, peso }
        ].sort((a, b) => a.fecha.getTime() - b.fecha.getTime())
      };
    });
  }, []);

  return { datosPeso, agregarRegistro };
}