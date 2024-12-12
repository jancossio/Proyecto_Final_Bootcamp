import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Registro {
  fecha: Date;
  peso: number;
}

interface Datos {
  registros: Registro[];
}

interface GraficoPesoProps {
  datos: Datos;
}

export const GraficoPeso: React.FC<GraficoPesoProps> = ({ datos }) => {
  const datosGrafico: ChartData<'line'> = {
    labels: datos.registros.map((registro) =>
      registro.fecha.toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'short',
      })
    ),
    datasets: [
      {
        label: 'Peso a lo largo del tiempo',
        data: datos.registros.map((registro) => registro.peso),
        borderColor: '#22c55e',
        backgroundColor: '#4ade80',
        tension: 0.3,
        fill: true,
        pointBackgroundColor: '#16a34a',
        pointBorderColor: '#ffffff',
        pointRadius: 6,
        pointHoverRadius: 8,
      },
    ],
  };

  const opciones: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: false,
        title: {
          display: true,
          text: 'Peso (kg)',
          color: '#22c55e',
          font: {
            size: 14,
            weight: 'bold',
          },
        },
        grid: {
          color: 'rgba(74, 222, 128, 0.1)',
        },
        ticks: {
          color: '#22c55e',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Fecha',
          color: '#22c55e',
          font: {
            size: 14,
            weight: 'bold',
          },
        },
        grid: {
          color: 'rgba(222, 96, 74, 0.1)',
        },
        ticks: {
          color: '#22c55e',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#22c55e',
          font: {
            size: 14,
            weight: 'bold',
          },
        },
      },
      tooltip: {
        backgroundColor: 'rgba(34, 197, 94, 0.9)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        callbacks: {
          label: (context) => `Peso: ${context.parsed.y} kg`,
        },
        padding: 12,
        cornerRadius: 8,
      },
    },
  };

  return (
    <div className="chart-container">
      <Line data={datosGrafico} options={opciones} />
    </div>
  );
};
