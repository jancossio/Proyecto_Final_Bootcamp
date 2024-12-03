import { useState, useCallback } from 'react';
import { WeightEntry, WeightData } from '../types/weight';

export function useWeightData() {
  const [weightData, setWeightData] = useState<WeightData>({
    entries: [
      { date: new Date(), weight: 70.5 },
      { date: new Date(Date.now() - 86400000), weight: 70.2 },
      { date: new Date(Date.now() - 172800000), weight: 69.8 },
    ]
  });

  const addEntry = useCallback((weight: number) => {
    setWeightData(prev => ({
      entries: [...prev.entries, { date: new Date(), weight }]
        .sort((a, b) => a.date.getTime() - b.date.getTime())
    }));
  }, []);

  return { weightData, addEntry };
}