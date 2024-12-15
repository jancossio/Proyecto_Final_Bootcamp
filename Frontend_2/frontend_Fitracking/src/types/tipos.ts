  
  export interface PropiedadesGrafico {
    datos: MapaPorcentajes;
  }
  
  export interface PropiedadesControl {
    nombre: string;
    valor: number;
    alCambiar: (valor: number) => void;
  }
  
  export interface Receta {
    nombre: string;
    descripcion: string;
    ingredientes: string[];
    instrucciones: string[];
    distribucionNutrientes: MapaPorcentajes;
    tiempoPreparacion: string;
    calorias: number;
    imagen?: string;
    tipoComida: 'desayuno' | 'comida' | 'cena';

  }
  
  export interface PropiedadesDieta {
    porcentajes: MapaPorcentajes;
  }