import React, { useState } from 'react';

interface WeightFormProps {
  onSubmit: (weight: number) => void;
}

export const WeightForm: React.FC<WeightFormProps> = ({ onSubmit }) => {
  const [weight, setWeight] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const weightValue = parseFloat(weight);
    if (!isNaN(weightValue)) {
      onSubmit(weightValue);
      setWeight('');
    }
  };

  return (
    <form className="weight-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="weight">Weight (kg):</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          step="0.1"
          required
        />
      </div>
      <button type="submit">Add Weight</button>
    </form>
  );
};