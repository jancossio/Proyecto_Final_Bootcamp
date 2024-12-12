export interface WeightEntry {
  fecha: Date;
  peso: number;
}

export interface DatosPeso {
  registros: WeightEntry[];
}