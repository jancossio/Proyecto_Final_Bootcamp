import { useState, useCallback, useMemo } from 'react';
import { MapaPorcentajes } from '../types/tipos';

export const usePorcentajes = (porcentajesIniciales: MapaPorcentajes) => {
  const [porcentajes, setPorcentajes] = useState(porcentajesIniciales);

  const actualizarPorcentaje = useCallback((nombre: string, valor: number) => {
    setPorcentajes((previos) => ({
      ...previos,
      [nombre]: valor,
    }));
  }, []);

  const total = useMemo(
    () => Object.values(porcentajes).reduce((suma, valor) => suma + valor, 0),
    [porcentajes]
  );

  return { porcentajes, actualizarPorcentaje, total };
};