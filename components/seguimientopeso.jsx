const WeightTracker = () => {
    const [weights, setWeights] = useState([
      { date: '2024-11-01', weight: 70 },
      { date: '2024-11-08', weight: 69.5 },
      { date: '2024-11-15', weight: 69 },
    ]);
    const [newDate, setNewDate] = useState('');
    const [newWeight, setNewWeight] = useState('');
  
    const addWeightEntry = () => {
      if (!newDate || !newWeight) return;
      const updatedWeights = [...weights, { date: newDate, weight: parseFloat(newWeight) }];
      setWeights(updatedWeights);
      setNewDate('');
      setNewWeight('');
    };
  
    const chartData = {
      labels: weights.map(entry => entry.date),
      datasets: [
        {
          label: 'Peso (kg)',
          data: weights.map(entry => entry.weight),
          borderColor: '#42A5F5',
          backgroundColor: 'rgba(66, 165, 245, 0.2)',
          tension: 0.3,
          pointBorderWidth: 2,
          pointRadius: 4,
          fill: true,
        },
      ],
    };
  
    const chartOptions = {
      responsive: true,
      plugins: {
        legend: { display: true, position: 'top' },
        tooltip: { enabled: true },
      },
      scales: {
        x: { title: { display: true, text: 'Fecha' } },
        y: { title: { display: true, text: 'Peso (kg)' } },
      },
    };
  
    return (
      <div className="container">
        <h2>Seguimiento de Peso</h2>
        <div className="chart-container">
          <Line data={chartData} options={chartOptions} />
        </div>
        <div>
          <input
            type="date"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
            placeholder="Fecha"
          />
          <input
            type="number"
            step="0.1"
            value={newWeight}
            onChange={(e) => setNewWeight(e.target.value)}
            placeholder="Peso (kg)"
          />
          <button onClick={addWeightEntry}>Agregar</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Peso (kg)</th>
            </tr>
          </thead>
          <tbody>
            {weights.map((entry, index) => (
              <tr key={index}>
                <td>{entry.date}</td>
                <td>{entry.weight}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default WeightTracker;
  