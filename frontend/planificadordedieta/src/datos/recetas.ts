import { Receta } from '../types/tipos';

export const RECETAS: Receta[] = [
  {
    nombre: "Bowl de quinoa con pollo y verduras",
    descripcion: "Un plato equilibrado rico en proteínas y fibra",
    ingredientes: [
      "150g de quinoa",
      "200g de pechuga de pollo",
      "100g de brócoli",
      "100g de zanahorias",
      "50g de espinacas",
      "30g de almendras",
      "2 cucharadas de aceite de oliva",
      "Especias al gusto"
    ],
    instrucciones: [
      "Cocinar la quinoa según las instrucciones del paquete",
      "Saltear el pollo cortado en cubos",
      "Cocinar al vapor el brócoli y las zanahorias",
      "Mezclar todos los ingredientes y aderezar"
    ],
    distribucionNutrientes: {
      proteinas: 30,
      carbohidratos: 35,
      fibra: 15,
      grasasVegetales: 12,
      minerales: 8
    },
    tiempoPreparacion: "25 minutos",
    calorias: 450,
    imagen: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  },
  {
    nombre: "Salmón al horno con patata y vegetales",
    descripcion: "Plato rico en ácidos grasos omega-3 y vitaminas",
    ingredientes: [
      "200g de salmón",
      "200g de patata",
      "150g de espárragos",
      "100g de pimientos",
      "2 cucharadas de aceite de oliva",
      "Hierbas frescas"
    ],
    instrucciones: [
      "Hornear el salmón a 180°C durante 15-20 minutos",
      "Asar la patata cortada en cubos",
      "Saltear los vegetales",
      "Servir con hierbas frescas"
    ],
    distribucionNutrientes: {
      proteinas: 35,
      carbohidratos: 25,
      fibra: 15,
      grasasVegetales: 20,
      minerales: 5
    },
    tiempoPreparacion: "35 minutos",
    calorias: 520,
    imagen: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  },
  {
    nombre: "Curry de lentejas con arroz integral",
    descripcion: "Plato vegetariano rico en proteínas y fibra",
    ingredientes: [
      "150g de lentejas",
      "100g de arroz integral",
      "100g de espinacas",
      "100g de zanahorias",
      "50g de cebolla",
      "Especias curry",
      "Leche de coco"
    ],
    instrucciones: [
      "Cocinar las lentejas con las especias",
      "Preparar el arroz integral",
      "Añadir las verduras y la leche de coco",
      "Cocinar a fuego lento hasta espesar"
    ],
    distribucionNutrientes: {
      proteinas: 25,
      carbohidratos: 40,
      fibra: 20,
      grasasVegetales: 10,
      minerales: 5
    },
    tiempoPreparacion: "40 minutos",
    calorias: 480,
    imagen: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  },
  {
    nombre: "Buddha Bowl Mediterráneo",
    descripcion: "Bowl vegetariano inspirado en la dieta mediterránea",
    ingredientes: [
      "150g de garbanzos cocidos",
      "100g de hummus",
      "100g de pepino",
      "100g de tomates cherry",
      "50g de aceitunas kalamata",
      "50g de queso feta",
      "Aceite de oliva virgen extra",
      "Orégano fresco"
    ],
    instrucciones: [
      "Disponer los garbanzos en la base del bowl",
      "Añadir el hummus en un lado",
      "Incorporar las verduras frescas",
      "Decorar con queso feta y aceitunas",
      "Aliñar con aceite y orégano"
    ],
    distribucionNutrientes: {
      proteinas: 20,
      carbohidratos: 30,
      fibra: 15,
      grasasVegetales: 25,
      minerales: 10
    },
    tiempoPreparacion: "15 minutos",
    calorias: 420,
    imagen: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  },
  {
    nombre: "Tacos de pescado estilo baja",
    descripcion: "Tacos frescos y ligeros con pescado blanco y ensalada de col",
    ingredientes: [
      "400g de pescado blanco",
      "Tortillas de maíz",
      "200g de col morada",
      "Limones",
      "Cilantro fresco",
      "Salsa de yogur",
      "Aguacate",
      "Especias mexicanas"
    ],
    instrucciones: [
      "Marinar el pescado con especias y limón",
      "Preparar la ensalada de col con cilantro",
      "Cocinar el pescado a la plancha",
      "Calentar las tortillas",
      "Montar los tacos con todos los ingredientes"
    ],
    distribucionNutrientes: {
      proteinas: 30,
      carbohidratos: 25,
      fibra: 10,
      grasasVegetales: 15,
      minerales: 20
    },
    tiempoPreparacion: "30 minutos",
    calorias: 380,
    imagen: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  },
  {
    nombre: "Ramen vegetariano",
    descripcion: "Sopa reconfortante con fideos y verduras asiáticas",
    ingredientes: [
      "200g de fideos ramen",
      "200g de tofu firme",
      "100g de setas shiitake",
      "100g de pak choi",
      "2 huevos",
      "Caldo de verduras",
      "Jengibre y ajo",
      "Salsa de soja"
    ],
    instrucciones: [
      "Preparar el caldo con jengibre y ajo",
      "Cocinar los huevos marinados",
      "Saltear el tofu y las setas",
      "Cocer los fideos",
      "Montar el ramen con todos los ingredientes"
    ],
    distribucionNutrientes: {
      proteinas: 25,
      carbohidratos: 45,
      fibra: 12,
      grasasVegetales: 8,
      minerales: 10
    },
    tiempoPreparacion: "45 minutos",
    calorias: 440,
    imagen: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  },
  {
    nombre: "Ensalada de kale y quinoa",
    descripcion: "Ensalada nutritiva con superalimentos",
    ingredientes: [
      "150g de kale",
      "100g de quinoa",
      "100g de arándanos secos",
      "50g de semillas de calabaza",
      "50g de queso de cabra",
      "Vinagreta de mostaza y miel",
      "Aguacate",
      "Zumo de limón"
    ],
    instrucciones: [
      "Cocinar la quinoa y dejar enfriar",
      "Masajear el kale con zumo de limón y aceite",
      "Tostar las semillas de calabaza",
      "Mezclar todos los ingredientes",
      "Añadir la vinagreta al servir"
    ],
    distribucionNutrientes: {
      proteinas: 15,
      carbohidratos: 35,
      fibra: 18,
      grasasVegetales: 22,
      minerales: 10
    },
    tiempoPreparacion: "20 minutos",
    calorias: 390,
    imagen: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  },
  {
    nombre: "Risotto de setas silvestres",
    descripcion: "Cremoso risotto italiano con variedad de setas",
    ingredientes: [
      "300g de arroz arborio",
      "200g de setas variadas",
      "1 cebolla",
      "2 dientes de ajo",
      "100ml de vino blanco",
      "1L de caldo de verduras",
      "50g de parmesano",
      "Mantequilla y aceite de oliva"
    ],
    instrucciones: [
      "Sofreír la cebolla y el ajo",
      "Añadir el arroz y tostar",
      "Incorporar el vino y dejar reducir",
      "Añadir el caldo poco a poco",
      "Finalizar con mantequilla y parmesano"
    ],
    distribucionNutrientes: {
      proteinas: 18,
      carbohidratos: 55,
      fibra: 8,
      grasasVegetales: 15,
      minerales: 4
    },
    tiempoPreparacion: "40 minutos",
    calorias: 520,
    imagen: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  },
  {
    nombre: "Poké bowl de atún",
    descripcion: "Bowl hawaiano con atún fresco y arroz de sushi",
    ingredientes: [
      "200g de atún fresco",
      "200g de arroz de sushi",
      "100g de edamame",
      "1 aguacate",
      "50g de algas wakame",
      "Salsa de soja",
      "Semillas de sésamo",
      "Jengibre encurtido"
    ],
    instrucciones: [
      "Preparar el arroz de sushi",
      "Cortar el atún en cubos",
      "Preparar las verduras",
      "Montar el bowl por capas",
      "Decorar con sésamo y jengibre"
    ],
    distribucionNutrientes: {
      proteinas: 35,
      carbohidratos: 40,
      fibra: 12,
      grasasVegetales: 18,
      minerales: 5
    },
    tiempoPreparacion: "30 minutos",
    calorias: 460,
    imagen: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  },
  {
    nombre: "Shakshuka",
    descripcion: "Plato mediterráneo de huevos pochados en salsa de tomate",
    ingredientes: [
      "6 huevos",
      "400g de tomates pelados",
      "2 pimientos",
      "1 cebolla",
      "3 dientes de ajo",
      "Comino y pimentón",
      "Perejil fresco",
      "Pan de pita"
    ],
    instrucciones: [
      "Preparar la salsa de tomate con las verduras",
      "Añadir las especias y cocinar",
      "Hacer huecos y añadir los huevos",
      "Cocinar hasta cuajar las claras",
      "Servir con pan de pita caliente"
    ],
    distribucionNutrientes: {
      proteinas: 28,
      carbohidratos: 25,
      fibra: 10,
      grasasVegetales: 15,
      minerales: 12
    },
    tiempoPreparacion: "35 minutos",
    calorias: 410,
    imagen: "https://images.unsplash.com/photo-1590412200988-a436970781fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  }
];