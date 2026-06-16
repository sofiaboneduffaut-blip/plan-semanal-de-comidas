const weekDays = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

const recipeDatabase = [
  {
    id: "r-001",
    title: "Bowl tibio de garbanzos y verduras",
    description: "Un plato rapido con garbanzos, verduras salteadas y limon.",
    diet_type: "vegan",
    difficulty: "simple",
    prep_time_minutes: 10,
    cook_time_minutes: 18,
    total_time_minutes: 28,
    servings: 4,
    ingredients: [
      item("garbanzos", "2 tazas", "Legumbres"),
      item("zucchini", "2 unidades", "Verduras"),
      item("morrón rojo", "1 unidad", "Verduras"),
      item("espinaca", "2 tazas", "Verduras"),
      item("limon", "1 unidad", "Frutas"),
      item("aceite de oliva", "2 cucharadas", "Despensa"),
      item("comino", "1 cucharadita", "Especias")
    ],
    steps: [
      "Enjuagar los garbanzos y cortar las verduras.",
      "Saltear zucchini y morron con aceite de oliva durante 8 minutos.",
      "Agregar garbanzos, comino y sal; cocinar 8 minutos mas.",
      "Apagar el fuego, sumar espinaca y terminar con limon."
    ],
    tags: ["rapida", "sin horno", "meal prep"],
    notes: "Funciona bien con arroz integral si quieres hacerlo mas abundante.",
    source_name: "Inspiracion propia",
    source_url: "https://www.choosemyplate.gov/eathealthy/vegetables",
    is_favorite: false
  },
  {
    id: "r-002",
    title: "Tarta rustica de calabaza y queso",
    description: "Tarta al horno con base comprada, calabaza asada y queso fresco.",
    diet_type: "vegetarian",
    difficulty: "medium",
    prep_time_minutes: 20,
    cook_time_minutes: 35,
    total_time_minutes: 55,
    servings: 4,
    ingredients: [
      item("masa de tarta", "1 unidad", "Panaderia"),
      item("calabaza", "700 g", "Verduras"),
      item("queso fresco", "180 g", "Lacteos"),
      item("huevos", "2 unidades", "Huevos"),
      item("cebolla", "1 unidad", "Verduras"),
      item("nuez moscada", "1 pizca", "Especias"),
      item("aceite de oliva", "1 cucharada", "Despensa"),
      item("semillas", "2 cucharadas", "Despensa")
    ],
    steps: [
      "Asar la calabaza en cubos hasta que este tierna.",
      "Saltear cebolla y mezclar con calabaza pisada, huevos y queso.",
      "Forrar una tartera con la masa y rellenar.",
      "Cubrir con semillas y hornear hasta dorar."
    ],
    tags: ["horno", "vegetariana"],
    notes: "La base comprada mantiene la receta en dificultad media.",
    source_name: "Inspirada en tartas caseras rioplatenses",
    source_url: "https://www.bbcgoodfood.com/howto/guide/vegetarian-cooking",
    is_favorite: false
  },
  {
    id: "r-003",
    title: "Pollo al limon con papas",
    description: "Bandeja de horno con pollo, papas y hierbas.",
    diet_type: "no restriction",
    difficulty: "medium",
    prep_time_minutes: 15,
    cook_time_minutes: 45,
    total_time_minutes: 60,
    servings: 4,
    ingredients: [
      item("muslos de pollo", "4 unidades", "Carnes"),
      item("papas", "800 g", "Verduras"),
      item("limon", "2 unidades", "Frutas"),
      item("ajo", "3 dientes", "Verduras"),
      item("romero", "1 cucharada", "Especias"),
      item("aceite de oliva", "3 cucharadas", "Despensa"),
      item("mostaza", "1 cucharada", "Despensa")
    ],
    steps: [
      "Mezclar limon, ajo, romero, aceite y mostaza.",
      "Cortar las papas y acomodarlas con el pollo en una fuente.",
      "Bañar con la marinada y hornear hasta que el pollo este cocido.",
      "Reposar 5 minutos antes de servir."
    ],
    tags: ["horno", "familiar"],
    notes: "Puedes sumar zanahorias a la misma bandeja.",
    source_name: "Inspirada en cocina mediterranea",
    source_url: "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures",
    is_favorite: false
  },
  {
    id: "r-004",
    title: "Pasta integral con pesto de espinaca",
    description: "Pasta simple con salsa verde fresca y nueces.",
    diet_type: "vegetarian",
    difficulty: "simple",
    prep_time_minutes: 10,
    cook_time_minutes: 15,
    total_time_minutes: 25,
    servings: 4,
    ingredients: [
      item("pasta integral", "360 g", "Despensa"),
      item("espinaca", "3 tazas", "Verduras"),
      item("nueces", "1/2 taza", "Frutos secos"),
      item("queso rallado", "1/2 taza", "Lacteos"),
      item("ajo", "1 diente", "Verduras"),
      item("aceite de oliva", "1/3 taza", "Despensa"),
      item("limon", "1/2 unidad", "Frutas")
    ],
    steps: [
      "Cocinar la pasta en agua con sal.",
      "Procesar espinaca, nueces, queso, ajo, aceite y limon.",
      "Mezclar la pasta caliente con el pesto.",
      "Ajustar sal y servir."
    ],
    tags: ["rapida", "vegetariana"],
    notes: "Para version vegana cambia el queso por levadura nutricional.",
    source_name: "Inspirada en pesto genoves",
    source_url: "https://www.eatingwell.com/category/4303/healthy-vegetarian-pasta-recipes/",
    is_favorite: false
  },
  {
    id: "r-005",
    title: "Lentejas estofadas con arroz",
    description: "Guiso vegano sustancioso con arroz, verduras y pimenton.",
    diet_type: "vegan",
    difficulty: "medium",
    prep_time_minutes: 15,
    cook_time_minutes: 45,
    total_time_minutes: 60,
    servings: 4,
    ingredients: [
      item("lentejas", "1 1/2 tazas", "Legumbres"),
      item("arroz", "1 taza", "Despensa"),
      item("zanahoria", "2 unidades", "Verduras"),
      item("cebolla", "1 unidad", "Verduras"),
      item("tomate triturado", "1 taza", "Despensa"),
      item("laurel", "1 hoja", "Especias"),
      item("pimenton", "1 cucharadita", "Especias"),
      item("caldo vegetal", "4 tazas", "Despensa")
    ],
    steps: [
      "Saltear cebolla y zanahoria picadas.",
      "Agregar lentejas, tomate, laurel, pimenton y caldo.",
      "Cocinar hasta que las lentejas esten tiernas.",
      "Sumar arroz y cocinar hasta que absorba el caldo."
    ],
    tags: ["vegana", "olla"],
    notes: "Si las lentejas ya estan cocidas, reduce el caldo y el tiempo.",
    source_name: "Inspirada en guisos caseros",
    source_url: "https://www.hsph.harvard.edu/nutritionsource/legumes-pulses/",
    is_favorite: false
  },
  {
    id: "r-006",
    title: "Risotto de hongos",
    description: "Arroz cremoso con hongos dorados y caldo caliente.",
    diet_type: "vegetarian",
    difficulty: "difficult",
    prep_time_minutes: 15,
    cook_time_minutes: 55,
    total_time_minutes: 70,
    servings: 4,
    ingredients: [
      item("arroz arborio", "320 g", "Despensa"),
      item("hongos", "400 g", "Verduras"),
      item("cebolla", "1 unidad", "Verduras"),
      item("ajo", "2 dientes", "Verduras"),
      item("vino blanco", "1/2 taza", "Bebidas"),
      item("caldo vegetal", "5 tazas", "Despensa"),
      item("manteca", "2 cucharadas", "Lacteos"),
      item("queso rallado", "3/4 taza", "Lacteos"),
      item("perejil", "1/2 taza", "Verduras")
    ],
    steps: [
      "Mantener el caldo caliente en una olla.",
      "Dorar hongos y reservar.",
      "Saltear cebolla, ajo y arroz hasta nacarar.",
      "Agregar vino, evaporar y sumar caldo de a poco mientras se revuelve.",
      "Terminar con hongos, manteca, queso y perejil."
    ],
    tags: ["tecnica", "vegetariana"],
    notes: "Requiere atencion constante para lograr textura cremosa.",
    source_name: "Inspirada en tecnica de risotto italiano",
    source_url: "https://www.seriouseats.com/how-to-make-perfect-risotto-recipe",
    is_favorite: false
  },
  {
    id: "r-007",
    title: "Tacos de porotos negros",
    description: "Tacos rapidos con porotos, palta y repollo crocante.",
    diet_type: "vegan",
    difficulty: "simple",
    prep_time_minutes: 15,
    cook_time_minutes: 10,
    total_time_minutes: 25,
    servings: 4,
    ingredients: [
      item("tortillas", "8 unidades", "Panaderia"),
      item("porotos negros", "2 tazas", "Legumbres"),
      item("palta", "2 unidades", "Verduras"),
      item("repollo", "2 tazas", "Verduras"),
      item("limon", "1 unidad", "Frutas"),
      item("cilantro", "1/2 taza", "Verduras"),
      item("comino", "1 cucharadita", "Especias"),
      item("salsa picante", "a gusto", "Despensa")
    ],
    steps: [
      "Calentar los porotos con comino y un poco de sal.",
      "Cortar repollo, palta y cilantro.",
      "Entibiar tortillas en sarten.",
      "Armar tacos con porotos, palta, repollo, limon y salsa."
    ],
    tags: ["vegana", "rapida"],
    notes: "Ideal para usar porotos ya cocidos.",
    source_name: "Inspirada en tacos vegetarianos",
    source_url: "https://www.myplate.gov/eat-healthy/protein-foods",
    is_favorite: false
  },
  {
    id: "r-008",
    title: "Merluza con pure de coliflor",
    description: "Filetes de pescado a la plancha con pure liviano.",
    diet_type: "no restriction",
    difficulty: "simple",
    prep_time_minutes: 10,
    cook_time_minutes: 20,
    total_time_minutes: 30,
    servings: 4,
    ingredients: [
      item("filetes de merluza", "4 unidades", "Pescados"),
      item("coliflor", "1 unidad", "Verduras"),
      item("leche", "1/2 taza", "Lacteos"),
      item("manteca", "1 cucharada", "Lacteos"),
      item("limon", "1 unidad", "Frutas"),
      item("perejil", "1/3 taza", "Verduras"),
      item("aceite de oliva", "1 cucharada", "Despensa")
    ],
    steps: [
      "Hervir coliflor hasta que este tierna.",
      "Procesar con leche, manteca y sal.",
      "Cocinar la merluza en sarten con aceite.",
      "Servir con limon y perejil."
    ],
    tags: ["pescado", "rapida"],
    notes: "Seca bien el pescado antes de llevarlo a la sarten.",
    source_name: "Inspirada en cocina saludable de pescado",
    source_url: "https://www.fda.gov/food/consumers/advice-about-eating-fish",
    is_favorite: false
  },
  {
    id: "r-009",
    title: "Lasagna de berenjena",
    description: "Capas de berenjena, salsa de tomate y ricota al horno.",
    diet_type: "vegetarian",
    difficulty: "difficult",
    prep_time_minutes: 30,
    cook_time_minutes: 50,
    total_time_minutes: 80,
    servings: 4,
    ingredients: [
      item("berenjenas", "3 unidades", "Verduras"),
      item("ricota", "400 g", "Lacteos"),
      item("mozzarella", "250 g", "Lacteos"),
      item("salsa de tomate", "3 tazas", "Despensa"),
      item("huevos", "1 unidad", "Huevos"),
      item("albahaca", "1/2 taza", "Verduras"),
      item("ajo", "2 dientes", "Verduras"),
      item("queso rallado", "1/2 taza", "Lacteos"),
      item("aceite de oliva", "3 cucharadas", "Despensa")
    ],
    steps: [
      "Cortar berenjenas en laminas y dorarlas.",
      "Mezclar ricota, huevo, ajo y albahaca.",
      "Armar capas de salsa, berenjena, ricota y mozzarella.",
      "Hornear hasta que burbujee y dore.",
      "Reposar 10 minutos antes de cortar."
    ],
    tags: ["horno", "vegetariana", "varios pasos"],
    notes: "El reposo ayuda a que las porciones salgan firmes.",
    source_name: "Inspirada en lasagna vegetariana",
    source_url: "https://www.eatingwell.com/recipes/18024/cuisines-regions/european/italian/vegetarian/",
    is_favorite: false
  },
  {
    id: "r-010",
    title: "Ensalada completa de quinoa",
    description: "Quinoa con verduras, semillas y vinagreta.",
    diet_type: "vegan",
    difficulty: "simple",
    prep_time_minutes: 15,
    cook_time_minutes: 15,
    total_time_minutes: 30,
    servings: 4,
    ingredients: [
      item("quinoa", "1 1/2 tazas", "Despensa"),
      item("pepino", "1 unidad", "Verduras"),
      item("tomate", "2 unidades", "Verduras"),
      item("zanahoria", "1 unidad", "Verduras"),
      item("semillas", "3 cucharadas", "Despensa"),
      item("limon", "1 unidad", "Frutas"),
      item("aceite de oliva", "3 cucharadas", "Despensa"),
      item("perejil", "1/2 taza", "Verduras")
    ],
    steps: [
      "Lavar y cocinar la quinoa.",
      "Picar pepino, tomate, zanahoria y perejil.",
      "Preparar vinagreta con limon, aceite y sal.",
      "Mezclar todo y terminar con semillas."
    ],
    tags: ["vegana", "fresca"],
    notes: "Se puede servir fria o a temperatura ambiente.",
    source_name: "Inspirada en ensaladas de granos",
    source_url: "https://www.hsph.harvard.edu/nutritionsource/food-features/quinoa/",
    is_favorite: false
  },
  {
    id: "r-011",
    title: "Empanadas caseras de carne",
    description: "Relleno especiado y armado manual para horno.",
    diet_type: "no restriction",
    difficulty: "difficult",
    prep_time_minutes: 45,
    cook_time_minutes: 35,
    total_time_minutes: 80,
    servings: 4,
    ingredients: [
      item("tapas de empanada", "12 unidades", "Panaderia"),
      item("carne picada", "500 g", "Carnes"),
      item("cebolla", "2 unidades", "Verduras"),
      item("morrón rojo", "1 unidad", "Verduras"),
      item("huevos", "2 unidades", "Huevos"),
      item("aceitunas", "1/2 taza", "Despensa"),
      item("pimenton", "1 cucharadita", "Especias"),
      item("comino", "1 cucharadita", "Especias"),
      item("aceite", "2 cucharadas", "Despensa")
    ],
    steps: [
      "Hervir huevos, enfriar y picar.",
      "Saltear cebolla y morron hasta transparentar.",
      "Agregar carne, pimenton y comino; cocinar y enfriar.",
      "Mezclar con huevo y aceitunas.",
      "Rellenar tapas, repulgar y hornear."
    ],
    tags: ["horno", "varios pasos"],
    notes: "El relleno frio evita que las tapas se rompan.",
    source_name: "Inspirada en empanadas criollas",
    source_url: "https://www.argentina.travel/en/news/empanadas-argentine-traditional-food",
    is_favorite: false
  },
  {
    id: "r-012",
    title: "Sopa cremosa de zanahoria y jengibre",
    description: "Sopa vegana suave con leche de coco.",
    diet_type: "vegan",
    difficulty: "simple",
    prep_time_minutes: 10,
    cook_time_minutes: 20,
    total_time_minutes: 30,
    servings: 4,
    ingredients: [
      item("zanahoria", "800 g", "Verduras"),
      item("cebolla", "1 unidad", "Verduras"),
      item("jengibre", "1 cucharada", "Verduras"),
      item("leche de coco", "1 taza", "Despensa"),
      item("caldo vegetal", "3 tazas", "Despensa"),
      item("aceite de oliva", "1 cucharada", "Despensa"),
      item("semillas", "2 cucharadas", "Despensa")
    ],
    steps: [
      "Saltear cebolla y jengibre.",
      "Agregar zanahoria en rodajas y caldo.",
      "Cocinar hasta ablandar y procesar.",
      "Sumar leche de coco y servir con semillas."
    ],
    tags: ["vegana", "olla"],
    notes: "Lista en 30 minutos con pocos pasos y tecnica basica.",
    source_name: "Inspirada en sopas de verduras",
    source_url: "https://www.myplate.gov/eat-healthy/vegetables",
    is_favorite: false
  },
  {
    id: "r-013",
    title: "Frittata de espinaca y papa",
    description: "Huevos, papas y hojas verdes en una comida rendidora.",
    diet_type: "vegetarian",
    difficulty: "medium",
    prep_time_minutes: 15,
    cook_time_minutes: 30,
    total_time_minutes: 45,
    servings: 4,
    ingredients: [
      item("huevos", "6 unidades", "Huevos"),
      item("papas", "500 g", "Verduras"),
      item("espinaca", "2 tazas", "Verduras"),
      item("cebolla", "1 unidad", "Verduras"),
      item("queso fresco", "120 g", "Lacteos"),
      item("aceite de oliva", "2 cucharadas", "Despensa"),
      item("pimienta", "1 pizca", "Especias")
    ],
    steps: [
      "Cortar papas finas y dorarlas en sarten.",
      "Agregar cebolla y espinaca.",
      "Batir huevos con queso y condimentos.",
      "Cocinar a fuego bajo hasta cuajar o terminar en horno."
    ],
    tags: ["vegetariana", "sarten"],
    notes: "Usa una sarten apta para horno si quieres dorar la superficie.",
    source_name: "Inspirada en frittata italiana",
    source_url: "https://www.incredibleegg.org/recipes/cooking-lessons/make-frittata/",
    is_favorite: false
  },
  {
    id: "r-014",
    title: "Curry suave de tofu y vegetales",
    description: "Tofu, verduras y leche de coco con arroz.",
    diet_type: "vegan",
    difficulty: "medium",
    prep_time_minutes: 20,
    cook_time_minutes: 30,
    total_time_minutes: 50,
    servings: 4,
    ingredients: [
      item("tofu", "400 g", "Proteinas"),
      item("arroz", "1 1/2 tazas", "Despensa"),
      item("brocoli", "2 tazas", "Verduras"),
      item("zanahoria", "2 unidades", "Verduras"),
      item("leche de coco", "1 lata", "Despensa"),
      item("pasta de curry", "2 cucharadas", "Especias"),
      item("ajo", "2 dientes", "Verduras"),
      item("jengibre", "1 cucharada", "Verduras"),
      item("aceite", "2 cucharadas", "Despensa")
    ],
    steps: [
      "Cocinar arroz por separado.",
      "Dorar tofu en cubos y reservar.",
      "Saltear ajo, jengibre, zanahoria y brocoli.",
      "Agregar pasta de curry, leche de coco y tofu.",
      "Cocinar hasta espesar y servir con arroz."
    ],
    tags: ["vegana", "salsa"],
    notes: "Ajusta la cantidad de curry segun tolerancia al picante.",
    source_name: "Inspirada en curries vegetales",
    source_url: "https://www.thaitradeusa.com/home/recipe",
    is_favorite: false
  },
  {
    id: "r-015",
    title: "Milanesas de berenjena con ensalada",
    description: "Berenjena empanada al horno con ensalada fresca.",
    diet_type: "vegetarian",
    difficulty: "medium",
    prep_time_minutes: 25,
    cook_time_minutes: 25,
    total_time_minutes: 50,
    servings: 4,
    ingredients: [
      item("berenjenas", "2 unidades", "Verduras"),
      item("huevos", "2 unidades", "Huevos"),
      item("pan rallado", "2 tazas", "Panaderia"),
      item("queso rallado", "1/3 taza", "Lacteos"),
      item("tomate", "3 unidades", "Verduras"),
      item("lechuga", "1 planta", "Verduras"),
      item("aceite de oliva", "2 cucharadas", "Despensa"),
      item("oregano", "1 cucharadita", "Especias")
    ],
    steps: [
      "Cortar berenjenas en laminas y salar 10 minutos.",
      "Pasar por huevo y pan rallado mezclado con queso.",
      "Hornear en placa aceitada hasta dorar.",
      "Servir con ensalada de tomate y lechuga."
    ],
    tags: ["vegetariana", "horno"],
    notes: "El salado previo mejora textura y sabor.",
    source_name: "Inspirada en milanesas vegetarianas",
    source_url: "https://www.eatingwell.com/category/4286/healthy-vegetarian-dinner-recipes/",
    is_favorite: false
  },
  {
    id: "r-016",
    title: "Pan casero relleno de verduras",
    description: "Masa levada con relleno de verduras salteadas.",
    diet_type: "vegan",
    difficulty: "difficult",
    prep_time_minutes: 55,
    cook_time_minutes: 45,
    total_time_minutes: 100,
    servings: 4,
    ingredients: [
      item("harina", "500 g", "Panaderia"),
      item("levadura", "10 g", "Panaderia"),
      item("agua", "300 ml", "Despensa"),
      item("aceite de oliva", "4 cucharadas", "Despensa"),
      item("sal", "2 cucharaditas", "Despensa"),
      item("cebolla", "1 unidad", "Verduras"),
      item("morrón rojo", "1 unidad", "Verduras"),
      item("zucchini", "1 unidad", "Verduras"),
      item("choclo", "1 taza", "Verduras"),
      item("oregano", "1 cucharadita", "Especias")
    ],
    steps: [
      "Preparar masa con harina, levadura, agua, aceite y sal.",
      "Amasar y dejar levar hasta duplicar.",
      "Saltear verduras y enfriar.",
      "Estirar la masa, rellenar, cerrar y dejar levar otra vez.",
      "Hornear hasta que el pan este dorado y suene hueco."
    ],
    tags: ["masa", "vegana", "avanzada"],
    notes: "La masa levada y el armado lo clasifican como dificil.",
    source_name: "Inspirada en panes rellenos caseros",
    source_url: "https://www.kingarthurbaking.com/learn/guides/bread",
    is_favorite: false
  }
];

let mealPlan = {
  id: crypto.randomUUID ? crypto.randomUUID() : `plan-${Date.now()}`,
  week_start_date: getMondayDate(),
  days: weekDays,
  selected_recipes: {},
  created_at: new Date().toISOString()
};

const state = {
  recipes: loadFavoriteFlags(recipeDatabase),
  preferences: getPreferences(),
  lastPool: []
};

const form = document.querySelector("#preferences-form");
const weekGrid = document.querySelector("#week-grid");
const statusEl = document.querySelector("#plan-status");
const shoppingButton = document.querySelector("#shopping-button");
const shoppingList = document.querySelector("#shopping-list");
const recipeDatabaseEl = document.querySelector("#recipe-database");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  state.preferences = getPreferences();
  generateMealPlan();
});

shoppingButton.addEventListener("click", generateShoppingList);

generateMealPlan();
renderRecipeDatabase();

function item(name, quantity, category) {
  return { name, quantity, category };
}

function getPreferences() {
  return {
    diet_type: document.querySelector("#diet-type")?.value || "no restriction",
    max_time: Number(document.querySelector("#max-time")?.value || 60),
    difficulty_preference: document.querySelector("#difficulty")?.value || "mixed",
    available_ingredients: parseList(document.querySelector("#available-ingredients")?.value || ""),
    excluded_ingredients: parseList(document.querySelector("#excluded-ingredients")?.value || ""),
    servings: Number(document.querySelector("#servings")?.value || 4)
  };
}

function parseList(value) {
  return value
    .split(",")
    .map((part) => normalizeText(part))
    .filter(Boolean);
}

function normalizeText(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function generateMealPlan() {
  const pool = getFilteredRecipes();
  state.lastPool = pool;
  mealPlan = {
    id: crypto.randomUUID ? crypto.randomUUID() : `plan-${Date.now()}`,
    week_start_date: getMondayDate(),
    days: weekDays,
    selected_recipes: {},
    created_at: new Date().toISOString()
  };

  const usedIds = new Set();
  weekDays.forEach((day, index) => {
    const recipe = pickRecipe(pool, usedIds, index);
    if (recipe) {
      mealPlan.selected_recipes[day] = recipe.id;
      usedIds.add(recipe.id);
    }
  });

  renderWeek();
  renderRecipeDatabase();
  shoppingList.className = "shopping-list empty-state";
  shoppingList.textContent = "Genera la lista cuando quieras revisar compras agrupadas.";
}

function getFilteredRecipes() {
  const prefs = state.preferences;
  return state.recipes
    .filter((recipe) => matchesDiet(recipe, prefs.diet_type))
    .filter((recipe) => prefs.difficulty_preference === "mixed" || recipe.difficulty === prefs.difficulty_preference)
    .filter((recipe) => recipe.total_time_minutes <= prefs.max_time)
    .filter((recipe) => !hasExcludedIngredient(recipe, prefs.excluded_ingredients))
    .map((recipe) => ({
      ...recipe,
      score: scoreRecipe(recipe, prefs.available_ingredients)
    }))
    .sort((a, b) => b.score - a.score || a.total_time_minutes - b.total_time_minutes);
}

function matchesDiet(recipe, dietType) {
  if (dietType === "no restriction") return true;
  if (dietType === "vegetarian") return recipe.diet_type === "vegetarian" || recipe.diet_type === "vegan";
  if (dietType === "gluten free") return isGlutenFreeRecipe(recipe);
  return recipe.diet_type === "vegan";
}

function isGlutenFreeRecipe(recipe) {
  const glutenTerms = [
    "harina",
    "masa",
    "pasta",
    "pan",
    "pan rallado",
    "tortillas",
    "levadura"
  ];

  return recipe.ingredients.every((ingredient) => {
    const name = normalizeText(ingredient.name);
    const category = normalizeText(ingredient.category);
    return category !== "panaderia" && !glutenTerms.some((term) => name.includes(term));
  });
}

function hasExcludedIngredient(recipe, excludedIngredients) {
  if (!excludedIngredients.length) return false;
  return recipe.ingredients.some((ingredient) => {
    const name = normalizeText(ingredient.name);
    const category = normalizeText(ingredient.category);
    return excludedIngredients.some((excluded) => (
      name.includes(excluded) ||
      excluded.includes(name) ||
      category.includes(excluded) ||
      excluded.includes(category)
    ));
  });
}

function scoreRecipe(recipe, availableIngredients) {
  if (!availableIngredients.length) return 0;
  return recipe.ingredients.reduce((score, ingredient) => {
    const name = normalizeText(ingredient.name);
    const matched = availableIngredients.some((available) => name.includes(available) || available.includes(name));
    return matched ? score + 1 : score;
  }, 0);
}

function pickRecipe(pool, usedIds, dayIndex) {
  const freshPool = pool.filter((recipe) => !usedIds.has(recipe.id));
  if (!freshPool.length) return null;
  const topScore = freshPool[0].score;
  const bestMatches = freshPool.filter((recipe) => recipe.score === topScore);
  return bestMatches[dayIndex % bestMatches.length] || freshPool[0];
}

function renderWeek() {
  weekGrid.innerHTML = "";
  const selectedRecipes = getSelectedRecipes();
  const missingDays = weekDays.length - selectedRecipes.length;
  statusEl.textContent = missingDays
    ? `${selectedRecipes.length} recetas encontradas. Ajusta filtros para completar los 5 dias.`
    : `Semana lista desde ${formatDate(mealPlan.week_start_date)}.`;

  weekDays.forEach((day) => {
    const recipe = getRecipeById(mealPlan.selected_recipes[day]);
    const card = document.createElement("article");
    card.className = "day-card";

    if (!recipe) {
      card.innerHTML = `
        <div class="day-label"><span>${day}</span></div>
        <div class="recipe-card empty-state">No hay receta compatible con estos filtros.</div>
      `;
      weekGrid.append(card);
      return;
    }

    card.innerHTML = `
      <div class="day-label">
        <span>${day}</span>
        <span class="difficulty-pill difficulty-${recipe.difficulty}">${labelDifficulty(recipe.difficulty)}</span>
      </div>
      <div class="recipe-card">
        <div>
          <h3>${recipe.title}</h3>
          <p class="recipe-description">${recipe.description}</p>
        </div>
        <div class="meta-line">
          <span>${recipe.total_time_minutes} min</span>
          <span>${state.preferences.servings} porciones</span>
          <span>${labelDiet(recipe.diet_type)}</span>
        </div>
        <ul class="ingredient-tags">
          ${recipe.ingredients.slice(0, 5).map((ingredient) => `<li>${ingredient.name}</li>`).join("")}
        </ul>
        <details class="recipe-details">
          <summary>Ver receta</summary>
          <strong>Ingredientes</strong>
          <ul>${recipe.ingredients.map((ingredient) => `<li>${ingredient.quantity} ${ingredient.name}</li>`).join("")}</ul>
          <strong>Pasos</strong>
          <ol>${recipe.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
          <p class="recipe-notes">${recipe.notes}</p>
          <a class="source-link" href="${recipe.source_url}" target="_blank" rel="noreferrer">${recipe.source_name}</a>
        </details>
        <div class="card-actions">
          <button class="secondary-button" type="button" data-action="replace" data-day="${day}">Reemplazar</button>
          <button class="ghost-button" type="button" data-action="favorite" data-id="${recipe.id}">
            ${recipe.is_favorite ? "Favorita" : "Guardar"}
          </button>
        </div>
      </div>
    `;
    weekGrid.append(card);
  });

  weekGrid.querySelectorAll("button[data-action='replace']").forEach((button) => {
    button.addEventListener("click", () => replaceRecipe(button.dataset.day));
  });

  weekGrid.querySelectorAll("button[data-action='favorite']").forEach((button) => {
    button.addEventListener("click", () => toggleFavorite(button.dataset.id));
  });
}

function replaceRecipe(day) {
  const currentIds = new Set(Object.values(mealPlan.selected_recipes));
  currentIds.delete(mealPlan.selected_recipes[day]);
  const candidates = state.lastPool.filter((recipe) => !currentIds.has(recipe.id) && recipe.id !== mealPlan.selected_recipes[day]);
  const replacement = candidates[0] || state.lastPool.find((recipe) => recipe.id !== mealPlan.selected_recipes[day]);
  if (replacement) {
    mealPlan.selected_recipes[day] = replacement.id;
    renderWeek();
    generateShoppingList();
  }
}

function toggleFavorite(recipeId) {
  state.recipes = state.recipes.map((recipe) => (
    recipe.id === recipeId ? { ...recipe, is_favorite: !recipe.is_favorite } : recipe
  ));
  localStorage.setItem("favoriteRecipeIds", JSON.stringify(state.recipes.filter((recipe) => recipe.is_favorite).map((recipe) => recipe.id)));
  renderWeek();
  renderRecipeDatabase();
}

function generateShoppingList() {
  const selectedRecipes = getSelectedRecipes();
  if (!selectedRecipes.length) {
    shoppingList.className = "shopping-list empty-state";
    shoppingList.textContent = "No hay recetas seleccionadas para generar compras.";
    return;
  }

  const grouped = selectedRecipes.reduce((groups, recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      if (!groups[ingredient.category]) groups[ingredient.category] = [];
      groups[ingredient.category].push(`${ingredient.quantity} ${ingredient.name}`);
    });
    return groups;
  }, {});

  shoppingList.className = "shopping-list";
  shoppingList.innerHTML = Object.entries(grouped)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([category, entries]) => `
      <div class="shopping-group">
        <h3>${category}</h3>
        <ul>${[...new Set(entries)].map((entry) => `<li>${entry}</li>`).join("")}</ul>
      </div>
    `)
    .join("");
}

function renderRecipeDatabase() {
  recipeDatabaseEl.innerHTML = state.recipes.map((recipe) => `
    <article class="database-card">
      <h3>${recipe.title} ${recipe.is_favorite ? '<span class="favorite-mark">favorita</span>' : ""}</h3>
      <div class="meta-line">
        <span>${labelDiet(recipe.diet_type)}</span>
        <span>${labelDifficulty(recipe.difficulty)}</span>
        <span>${recipe.total_time_minutes} min</span>
      </div>
      <ul class="tag-list">${recipe.tags.map((tag) => `<li>${tag}</li>`).join("")}</ul>
    </article>
  `).join("");
}

function getSelectedRecipes() {
  return weekDays
    .map((day) => getRecipeById(mealPlan.selected_recipes[day]))
    .filter(Boolean);
}

function getRecipeById(recipeId) {
  return state.recipes.find((recipe) => recipe.id === recipeId);
}

function loadFavoriteFlags(recipes) {
  const favoriteIds = JSON.parse(localStorage.getItem("favoriteRecipeIds") || "[]");
  return recipes.map((recipe) => ({ ...recipe, is_favorite: favoriteIds.includes(recipe.id) }));
}

function labelDifficulty(difficulty) {
  return {
    simple: "Simple",
    medium: "Media",
    difficult: "Dificil"
  }[difficulty];
}

function labelDiet(dietType) {
  return {
    vegan: "Vegana",
    vegetarian: "Vegetariana",
    "gluten free": "Sin gluten",
    "no restriction": "Sin restriccion"
  }[dietType];
}

function getMondayDate() {
  const now = new Date();
  const day = now.getDay();
  const diff = now.getDate() - day + (day === 0 ? -6 : 1);
  const monday = new Date(now.setDate(diff));
  return monday.toISOString().slice(0, 10);
}

function formatDate(dateString) {
  return new Intl.DateTimeFormat("es-UY", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(`${dateString}T12:00:00`));
}
