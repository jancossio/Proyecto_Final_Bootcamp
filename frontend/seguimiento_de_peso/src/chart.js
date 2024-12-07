import Chart from 'chart.js/auto';

export function createWeightChart(chartContext, weightTracker) {
  const entries = weightTracker.getEntries();
  
  return new Chart(chartContext, {
    type: 'line',
    data: {
      labels: entries.map(entry => entry.date.toLocaleDateString()),
      datasets: [{
        label: 'Weight Over Time',
        data: entries.map(entry => entry.weight),
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
        fill: false
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: false,
          title: {
            display: true,
            text: 'Weight (kg)'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Date'
          }
        }
      }
    }
  });
}