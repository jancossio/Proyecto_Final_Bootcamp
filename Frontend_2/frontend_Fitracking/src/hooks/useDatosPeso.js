import { useState, useCallback } from 'react';
import { addMonths } from 'date-fns';

export function useDatosPeso() {
  const [datosPeso, setDatosPeso] = useState({
    registros: []
  });

  const agregarRegistro = useCallback((peso) => {
    setDatosPeso(prevDatos => {
      const nuevaFecha = prevDatos.registros.length === 0
        ? new Date(2024, 11, 1) 
        : addMonths(prevDatos.registros[prevDatos.registros.length - 1].fecha, 1);

      return {
        registros: [...prevDatos.registros, { fecha: nuevaFecha, peso }]
          .sort((a, b) => a.fecha.getTime() - b.fecha.getTime())
      };
    });
  }, []);

  return { datosPeso, agregarRegistro };
}