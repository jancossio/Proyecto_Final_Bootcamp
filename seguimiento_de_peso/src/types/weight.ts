export interface WeightEntry {
  date: Date;
  weight: number;
}

export interface WeightData {
  entries: WeightEntry[];
}