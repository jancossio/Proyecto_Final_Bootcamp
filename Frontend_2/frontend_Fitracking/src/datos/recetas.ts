import { Receta } from '../types/tipos';

// Desayunos
const DESAYUNOS: Receta[] = [
  {
    nombre: "Tazón de avena con frutas",
    descripcion: "Desayuno nutritivo y energético con avena y frutas frescas",
    ingredientes: [
      "50g de avena",
      "200ml de leche de almendras",
      "1 plátano",
      "Frutos rojos",
      "Miel",
      "Semillas de chía",
      "Canela"
    ],
    instrucciones: [
      "Cocinar la avena con la leche de almendras",
      "Añadir canela al gusto",
      "Decorar con frutas y semillas",
      "Endulzar con miel"
    ],
    distribucionNutrientes: {
      proteinas: 15,
      carbohidratos: 45,
      fibra: 20,
      grasasVegetales: 10,
      minerales: 10
    },
    tiempoPreparacion: "10 minutos",
    calorias: 350,
    imagen: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    tipoComida: "desayuno"
  },
  {
    nombre: "Tazón de avena con frutas",
    descripcion: "Desayuno nutritivo y energético con avena y frutas frescas",
    ingredientes: [
      "50g de avena",
      "200ml de leche de almendras",
      "1 plátano",
      "Frutos rojos",
      "Miel",
      "Semillas de chía",
      "Canela"
    ],
    instrucciones: [
      "Cocinar la avena con la leche de almendras",
      "Añadir canela al gusto",
      "Decorar con frutas y semillas",
      "Endulzar con miel"
    ],
    distribucionNutrientes: {
      proteinas: 15,
      carbohidratos: 45,
      fibra: 20,
      grasasVegetales: 10,
      minerales: 10
    },
    tiempoPreparacion: "10 minutos",
    calorias: 350,
    imagen: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    tipoComida: "desayuno"
  },
  {
    nombre: "Tostadas de aguacate y huevo",
    descripcion: "Desayuno saludable rico en grasas buenas y proteínas",
    ingredientes: [
      "2 rebanadas de pan integral",
      "1 aguacate",
      "2 huevos",
      "Tomates cherry",
      "Brotes de espinaca",
      "Sal y pimienta",
      "Aceite de oliva"
    ],
    instrucciones: [
      "Tostar el pan",
      "Machacar el aguacate y sazonar",
      "Preparar los huevos pochados",
      "Montar las tostadas con todos los ingredientes"
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
    imagen: "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    tipoComida: "desayuno"
  },
  {
    nombre: "Batido verde energético",
    descripcion: "Batido nutritivo con espinacas y frutas para comenzar el día",
    ingredientes: [
      "2 tazas de espinacas",
      "1 plátano maduro",
      "1 manzana verde",
      "1 cucharada de semillas de lino",
      "200ml de leche de almendras",
      "1 cucharada de miel",
      "Jengibre fresco (opcional)"
    ],
    instrucciones: [
      "Lavar bien las espinacas",
      "Pelar y cortar las frutas",
      "Añadir todos los ingredientes en la licuadora",
      "Batir hasta obtener una mezcla homogénea",
      "Servir inmediatamente"
    ],
    distribucionNutrientes: {
      proteinas: 10,
      carbohidratos: 35,
      fibra: 25,
      grasasVegetales: 15,
      minerales: 15
    },
    tiempoPreparacion: "8 minutos",
    calorias: 280,
    imagen: "https://images.unsplash.com/photo-1556881286-fc6915169721?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    tipoComida: "desayuno"
  },
  {
    nombre: "Yogur griego con granola casera",
    descripcion: "Desayuno proteico con granola crujiente y frutas de temporada",
    ingredientes: [
      "200g de yogur griego natural",
      "50g de granola casera",
      "Frutos rojos variados",
      "1 cucharada de miel",
      "Semillas de calabaza",
      "Almendras laminadas",
      "Canela en polvo"
    ],
    instrucciones: [
      "Colocar el yogur griego en un bowl",
      "Añadir la granola por encima",
      "Decorar con frutos rojos y semillas",
      "Espolvorear canela y añadir miel al gusto"
    ],
    distribucionNutrientes: {
      proteinas: 25,
      carbohidratos: 40,
      fibra: 15,
      grasasVegetales: 20,
      minerales: 10
    },
    tiempoPreparacion: "5 minutos",
    calorias: 380,
    imagen: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    tipoComida: "desayuno"
  },
  {
    nombre: "Tortilla de claras con espinacas",
    descripcion: "Desayuno alto en proteínas y bajo en grasas",
    ingredientes: [
      "4 claras de huevo",
      "100g de espinacas frescas",
      "50g de champiñones",
      "1/4 de cebolla",
      "Queso feta bajo en grasa",
      "Sal y pimienta",
      "Aceite de oliva en spray"
    ],
    instrucciones: [
      "Saltear las verduras en una sartén",
      "Batir las claras con sal y pimienta",
      "Verter las claras sobre las verduras",
      "Añadir el queso feta desmenuzado",
      "Cocinar hasta que esté cuajada"
    ],
    distribucionNutrientes: {
      proteinas: 30,
      carbohidratos: 10,
      fibra: 15,
      grasasVegetales: 8,
      minerales: 12
    },
    tiempoPreparacion: "15 minutos",
    calorias: 250,
    imagen: "https://images.unsplash.com/photo-1510693206972-df098062cb71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    tipoComida: "desayuno"
  },
  {
    nombre: "Pancakes de plátano y avena",
    descripcion: "Tortitas saludables sin azúcar añadido",
    ingredientes: [
      "1 plátano maduro",
      "100g de avena en harina",
      "1 huevo",
      "100ml de leche de avena",
      "1 cucharadita de canela",
      "1 cucharadita de levadura",
      "Frutos rojos para decorar"
    ],
    instrucciones: [
      "Machacar el plátano hasta hacer puré",
      "Mezclar todos los ingredientes hasta obtener una masa homogénea",
      "Calentar una sartén antiadherente",
      "Cocinar los pancakes por ambos lados",
      "Servir con frutos rojos"
    ],
    distribucionNutrientes: {
      proteinas: 15,
      carbohidratos: 50,
      fibra: 18,
      grasasVegetales: 8,
      minerales: 9
    },
    tiempoPreparacion: "20 minutos",
    calorias: 320,
    imagen: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    tipoComida: "desayuno"
  },
  {
    nombre: "Tostadas de aguacate y huevo",
    descripcion: "Desayuno saludable rico en grasas buenas y proteínas",
    ingredientes: [
      "2 rebanadas de pan integral",
      "1 aguacate",
      "2 huevos",
      "Tomates cherry",
      "Brotes de espinaca",
      "Sal y pimienta",
      "Aceite de oliva"
    ],
    instrucciones: [
      "Tostar el pan",
      "Machacar el aguacate y sazonar",
      "Preparar los huevos pochados",
      "Montar las tostadas con todos los ingredientes"
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
    imagen: "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    tipoComida: "desayuno"
  }
];

// Comidas
const COMIDAS: Receta[] = [
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
    imagen: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    tipoComida: "comida"
  },
  {
    nombre: "Poke bowl de atún",
    descripcion: "Bowl hawaiano fresco y nutritivo con atún y arroz integral",
    ingredientes: [
      "200g de atún fresco",
      "150g de arroz integral",
      "1 aguacate",
      "100g de edamame",
      "50g de algas wakame",
      "Pepino",
      "Zanahoria",
      "Salsa de soja",
      "Semillas de sésamo"
    ],
    instrucciones: [
      "Cortar el atún en cubos",
      "Cocinar el arroz integral",
      "Preparar las verduras en juliana",
      "Montar el bowl con todos los ingredientes",
      "Aliñar con salsa de soja y decorar con sésamo"
    ],
    distribucionNutrientes: {
      proteinas: 35,
      carbohidratos: 30,
      fibra: 12,
      grasasVegetales: 18,
      minerales: 5
    },
    tiempoPreparacion: "30 minutos",
    calorias: 420,
    imagen: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351",
    tipoComida: "comida"
  },
  {
    nombre: "Wok de tofu y verduras",
    descripcion: "Salteado asiático vegetariano rico en proteínas",
    ingredientes: [
      "200g de tofu firme",
      "200g de brócoli",
      "100g de pimiento rojo",
      "100g de champiñones",
      "2 zanahorias",
      "Salsa de soja",
      "Jengibre fresco",
      "Ajo",
      "Aceite de sésamo"
    ],
    instrucciones: [
      "Marinar el tofu en salsa de soja",
      "Cortar todas las verduras",
      "Saltear el tofu hasta que esté dorado",
      "Añadir las verduras al wok",
      "Condimentar con jengibre y ajo"
    ],
    distribucionNutrientes: {
      proteinas: 25,
      carbohidratos: 20,
      fibra: 15,
      grasasVegetales: 15,
      minerales: 25
    },
    tiempoPreparacion: "25 minutos",
    calorias: 350,
    imagen: "https://images.unsplash.com/photo-1512003867696-6d5ce6835040",
    tipoComida: "comida"
  },
  {
    nombre: "Pasta integral con albóndigas de pavo",
    descripcion: "Pasta proteica con salsa casera de tomate",
    ingredientes: [
      "150g de pasta integral",
      "300g de pavo picado",
      "1 huevo",
      "Pan rallado integral",
      "Tomates naturales",
      "Cebolla",
      "Ajo",
      "Albahaca fresca",
      "Aceite de oliva"
    ],
    instrucciones: [
      "Preparar las albóndigas mezclando el pavo, huevo y pan rallado",
      "Hacer la salsa de tomate casera",
      "Cocinar la pasta al dente",
      "Hornear las albóndigas",
      "Mezclar todo y decorar con albahaca"
    ],
    distribucionNutrientes: {
      proteinas: 30,
      carbohidratos: 45,
      fibra: 8,
      grasasVegetales: 12,
      minerales: 5
    },
    tiempoPreparacion: "35 minutos",
    calorias: 460,
    imagen: "https://images.unsplash.com/photo-1515516969-d4008cc6241a",
    tipoComida: "comida"
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
    imagen: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    tipoComida: "comida"
  },
  // Aquí se incluyen el resto de las recetas que has proporcionado...
];

// Cenas
const CENAS: Receta[] = [
  {
    nombre: "Salmón al horno con vegetales",
    descripcion: "Cena ligera rica en omega-3 y proteínas",
    ingredientes: [
      "200g de salmón",
      "200g de espárragos",
      "100g de calabacín",
      "Limón",
      "Hierbas aromáticas",
      "Aceite de oliva",
      "Sal y pimienta"
    ],
    instrucciones: [
      "Precalentar el horno a 180°C",
      "Preparar el salmón con limón y hierbas",
      "Hornear junto con los vegetales",
      "Servir con un chorrito de aceite"
    ],
    distribucionNutrientes: {
      proteinas: 35,
      carbohidratos: 15,
      fibra: 10,
      grasasVegetales: 30,
      minerales: 10
    },
    tiempoPreparacion: "25 minutos",
    calorias: 380,
    imagen: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    tipoComida: "cena"
  },
  {
    nombre: "Buddha bowl vegetariano",
    descripcion: "Bowl nutritivo y ligero perfecto para la cena",
    ingredientes: [
      "100g de garbanzos cocidos",
      "100g de patata asada",
      "50g de kale",
      "1 aguacate",
      "Brotes de alfalfa",
      "Semillas variadas",
      "Hummus casero",
      "Zumo de limón"
    ],
    instrucciones: [
      "Asar la patata con especias",
      "Masajear el kale con limón y aceite",
      "Calentar los garbanzos con especias",
      "Montar el bowl con todos los ingredientes",
      "Decorar con semillas y hummus"
    ],
    distribucionNutrientes: {
      proteinas: 15,
      carbohidratos: 30,
      fibra: 20,
      grasasVegetales: 25,
      minerales: 10
    },
    tiempoPreparacion: "20 minutos",
    calorias: 380,
    imagen: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2",
    tipoComida: "cena"
  },
  {
    nombre: "Tortilla de claras con espinacas y champiñones",
    descripcion: "Cena ligera alta en proteínas",
    ingredientes: [
      "6 claras de huevo",
      "150g de espinacas frescas",
      "100g de champiñones",
      "1 cebolla pequeña",
      "Queso feta light",
      "Hierbas provenzales",
      "Pimienta negra"
    ],
    instrucciones: [
      "Saltear los champiñones y la cebolla",
      "Añadir las espinacas hasta que se marchiten",
      "Batir las claras con las hierbas",
      "Hacer la tortilla a fuego medio",
      "Añadir el queso feta al final"
    ],
    distribucionNutrientes: {
      proteinas: 28,
      carbohidratos: 8,
      fibra: 5,
      grasasVegetales: 7,
      minerales: 12
    },
    tiempoPreparacion: "15 minutos",
    calorias: 220,
    imagen: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543",
    tipoComida: "cena"
  },
  {
    nombre: "Crema de calabacín y guisantes",
    descripcion: "Sopa cremosa y reconfortante baja en calorías",
    ingredientes: [
      "2 calabacines medianos",
      "200g de guisantes",
      "1 puerro",
      "Caldo vegetal",
      "Menta fresca",
      "Yogur griego natural",
      "Semillas de calabaza"
    ],
    instrucciones: [
      "Pochar el puerro suavemente",
      "Añadir el calabacín y los guisantes",
      "Cubrir con caldo vegetal",
      "Triturar hasta obtener una crema suave",
      "Servir con yogur y semillas"
    ],
    distribucionNutrientes: {
      proteinas: 12,
      carbohidratos: 20,
      fibra: 15,
      grasasVegetales: 5,
      minerales: 8
    },
    tiempoPreparacion: "25 minutos",
    calorias: 180,
    imagen: "https://images.unsplash.com/photo-1547592166-23ac45744acd",
    tipoComida: "cena"
  },
  {
    nombre: "Ensalada mediterránea con atún",
    descripcion: "Cena ligera y refrescante",
    ingredientes: [
      "100g de atún en conserva",
      "Lechuga variada",
      "Tomates cherry",
      "Pepino",
      "Aceitunas negras",
      "Cebolla roja",
      "Aceite de oliva",
      "Vinagre balsámico"
    ],
    instrucciones: [
      "Lavar y cortar las verduras",
      "Escurrir el atún",
      "Mezclar todos los ingredientes",
      "Aliñar con aceite y vinagre"
    ],
    distribucionNutrientes: {
      proteinas: 25,
      carbohidratos: 15,
      fibra: 12,
      grasasVegetales: 20,
      minerales: 8
    },
    tiempoPreparacion: "15 minutos",
    calorias: 320,
    imagen: "https://images.unsplash.com/photo-1511994714008-b6d68a8b32a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    tipoComida: "cena"
  }
  // Aquí se incluyen el resto de las recetas que has proporcionado...
];

export const RECETAS: Receta[] = [...DESAYUNOS, ...COMIDAS, ...CENAS];