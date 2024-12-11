import React, { useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { PropiedadesGrafico } from '../../types/tipos';
import { COLORES_NUTRIENTES } from '../../constants/colores';
import { formatearNombre } from '../../utilidades/formateo';

export const GraficoCircular: React.FC<PropiedadesGrafico> = ({ datos }) => {
  const [segmentoActivo, setSegmentoActivo] = useState<number | undefined>();

  const datosGrafico = Object.entries(datos).map(([nombre, valor]) => ({
    title: formatearNombre(nombre),
    value: valor,
    color: COLORES_NUTRIENTES[nombre as keyof typeof COLORES_NUTRIENTES],
  }));

  return (
    <div className="w-full max-w-md mx-auto relative">
      <PieChart
        data={datosGrafico}
        label={({ dataEntry }) => {
          const porcentaje = Math.round(dataEntry.value);
          const fontSize = porcentaje < 15 ? '4px' : 
                          porcentaje < 25 ? '5px' : '6px';
          
          return (
            <text
              x="0"
              y="0"
              fontSize={fontSize}
              fill="#fff"
              fontFamily="sans-serif"
              fontWeight="bold"
              dominantBaseline="middle"
              textAnchor="middle"
            >
              {dataEntry.title}
              <tspan x="0" dy="1.2em">{`${porcentaje}%`}</tspan>
            </text>
          );
        }}
        labelPosition={65}
        animate
        radius={42}
        lineWidth={45}
        labelStyle={{
          pointerEvents: 'none',
        }}
        segmentsStyle={{ transition: 'stroke-width 0.2s' }}
        segmentsShift={(index) => (index === segmentoActivo ? 3 : 0)}
        onMouseOver={(_, index) => setSegmentoActivo(index)}
        onMouseOut={() => setSegmentoActivo(undefined)}
      />
      {segmentoActivo !== undefined && (
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-md text-sm shadow-lg pointer-events-none">
          {datosGrafico[segmentoActivo].title}: {Math.round(datosGrafico[segmentoActivo].value)}%
        </div>
      )}
    </div>
  );
};