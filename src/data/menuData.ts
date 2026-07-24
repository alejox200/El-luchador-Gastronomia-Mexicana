import { Category, MenuItem } from '../types/menu';

export const MENU_CATEGORIES: Category[] = [
  {
    id: 'entradas',
    name: 'Entradas & Botanas',
    description: 'Bocados artesanales ideados para compartir y despertar el paladar.',
    iconName: 'Flame'
  },
  {
    id: 'tacos',
    name: 'Tacos de Autor',
    description: 'Tortillas de maíz criollo nixtamalizado con guisados y cortes de alta cocina.',
    iconName: 'UtensilsCrossed'
  },
  {
    id: 'fuertes',
    name: 'Platillos Fuertes',
    description: 'Creaciones robustas donde la tradición mexicana se abraza con técnicas mundiales.',
    iconName: 'ChefHat'
  },
  {
    id: 'postres',
    name: 'Postres Artesanales',
    description: 'El cierre dulce con cacao ancestral, vainilla de Papantla y toques mezcaleros.',
    iconName: 'Cake'
  },
  {
    id: 'cocteles',
    name: 'Mixología & Mezcalería',
    description: 'Cócteles de autor con agaves seleccionados, frutas tropicales y chiles ahumados.',
    iconName: 'GlassWater'
  },
  {
    id: 'especiales',
    name: 'Especiales del Chef',
    description: 'Ediciones limitadas preparadas con ingredientes de temporada y técnica fusión.',
    iconName: 'Sparkles'
  }
];

export const DEMO_MENU_ITEMS: MenuItem[] = [
  // ENTRADAS
  {
    id: 'ent-1',
    name: 'Guacamole El Luchador',
    subtitle: 'Con Chicharrón de Ribeye y Queso Cotija',
    description: 'Aguacate criollo majado al momento con cilantro fresco, lima de monte, chicharrón crujiente de Ribeye y espolvoreado con queso Cotija ahumado.',
    price: 65,
    category: 'entradas',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800',
    tags: ['chef-choice'],
    isPopular: true,
    ingredients: ['Aguacate criollo', 'Chicharrón de Ribeye', 'Queso Cotija', 'Totopos nixtamalizados']
  },
  {
    id: 'ent-2',
    name: 'Esquites de Milpa a la Trufa',
    subtitle: 'Elote tierno a las brasas con Alioli de Habanero',
    description: 'Granos de elote tierno salteados con epazote, mantequilla de trufa negra, mayo-alioli de habanero tostado y ceniza de tortilla.',
    price: 55,
    category: 'entradas',
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&q=80&w=800',
    tags: ['vegetariano', 'picante'],
    spicinessLevel: 2,
    ingredients: ['Elote de milpa', 'Epazote', 'Trufa negra', 'Alioli habanero']
  },
  {
    id: 'ent-3',
    name: 'Queso Fundido Tulum',
    subtitle: 'Queso Oaxaca curado con Chorizo al Mezcal',
    description: 'Mezcla artesanal de queso Oaxaca y Manchego mexicano fundido a las brasas con chorizo marinada en mezcal y chiles secos. Servido en molcajete caliente.',
    price: 70,
    category: 'entradas',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=800',
    tags: ['gluten-free'],
    ingredients: ['Queso Oaxaca', 'Chorizo al mezcal', 'Tortillas criollas']
  },

  // TACOS DE AUTOR
  {
    id: 'tac-1',
    name: 'Tacos de Birria de Suadero al Mezcal',
    subtitle: '3 piezas con Consomé Concentrado',
    description: 'Suadero confitado durante 12 horas en mezcla de agaves y especias ancestrales, servido en tortillas doradas con queso crujiente, cebolla encurtida y consomé caliente.',
    price: 85,
    category: 'tacos',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=800',
    tags: ['chef-choice'],
    isPopular: true,
    spicinessLevel: 2,
    ingredients: ['Suadero de res', 'Consomé de birria', 'Queso fundido', 'Cebolla morada']
  },
  {
    id: 'tac-2',
    name: 'Tacos de Pulpo al Carbón',
    subtitle: '3 piezas con Salsa Macha de Piñón',
    description: 'Tentáculos de pulpo marinados en chiles ahumados y sellados al carbón sobre guacamole de cilantro y salsa macha casera de piñón blanco.',
    price: 95,
    category: 'tacos',
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&q=80&w=800',
    tags: ['picante', 'nuevo'],
    spicinessLevel: 3,
    ingredients: ['Pulpo al carbón', 'Salsa macha', 'Guacamole', 'Cilantro baby']
  },
  {
    id: 'tac-3',
    name: 'Tacos Gobernador Fusión',
    subtitle: '3 piezas de Camarón U15 y Tocino Ahumado',
    description: 'Camaron de profundidad salteado con pimientos tricolor, queso asadero derretido y tocino crujiente en tortilla de maíz nixtamalizado.',
    price: 90,
    category: 'tacos',
    image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&q=80&w=800',
    isPopular: true,
    ingredients: ['Camarón U15', 'Queso asadero', 'Tocino ahumado', 'Pimientos']
  },

  // PLATILLOS FUERTES
  {
    id: 'fue-1',
    name: 'Ribeye en Mole Negro de Oaxaca',
    subtitle: 'Corte Prime 12 oz con Puré de Camote',
    description: 'Corte Ribeye Prime sellado en sartén de hierro fundido, bañado en mole negro elaborado artesanalmente con 34 ingredientes y cacao soconusco. Acompañado de puré de camote perfumado con canela.',
    price: 185,
    category: 'fuertes',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
    tags: ['chef-choice'],
    isPopular: true,
    ingredients: ['Ribeye Prime 12oz', 'Mole negro artesanal', 'Puré de camote', 'Ajonjolí tostado']
  },
  {
    id: 'fue-2',
    name: 'Salmón Glaseado al Habanero & Agave',
    subtitle: 'Sobre Arroz Verde con Poblano y Coco',
    description: 'Filete de salmón fresco glaseado con reducción de miel de agave y habanero dulce, sobre una cama de arroz basmati infundido en chile poblano, cilantro y leche de coco.',
    price: 165,
    category: 'fuertes',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800',
    tags: ['gluten-free'],
    spicinessLevel: 2,
    ingredients: ['Salmón atlántico', 'Miel de agave', 'Chile habanero', 'Arroz verde poblano']
  },
  {
    id: 'fue-3',
    name: 'Enchiladas de Pato Confitado',
    subtitle: 'Salsa Verde de Tomatillo y Hoja Santa',
    description: 'Tres enchiladas rellenas de pato confitado deshebrado, bañadas en salsa asada de tomatillo de milpa, hoja santa, crema agria artesanal y queso fresco de ovispo.',
    price: 130,
    category: 'fuertes',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=800',
    tags: ['nuevo'],
    ingredients: ['Pato confitado', 'Tomatillo de milpa', 'Hoja santa', 'Crema y queso fresco']
  },

  // POSTRES
  {
    id: 'pos-1',
    name: 'Churros Gourmet El Santo',
    subtitle: 'Con Cajeta de Celaya y Chocolate con Mezcal',
    description: 'Churros crujientes espolvoreados en azúcar mascabado y canela criolla. Acompañados de dip de cajeta quemada de Celaya y ganache de chocolate amargo al mezcal.',
    price: 45,
    category: 'postres',
    image: 'https://images.unsplash.com/photo-1624371414361-e670edf4898d?auto=format&fit=crop&q=80&w=800',
    tags: ['chef-choice'],
    isPopular: true,
    ingredients: ['Churros artesanales', 'Cajeta de Celaya', 'Chocolate al mezcal', 'Canela criolla']
  },
  {
    id: 'pos-2',
    name: 'Tres Leches de Cacao & Mezcal',
    subtitle: 'Bizcocho bañado en Infusión de Cacao Ancestral',
    description: 'Bizcocho esponjoso embebido en tres leches aromatizadas con mezcal Espadín, cacao orgánico del Soconusco y merengue tostado al soplete.',
    price: 50,
    category: 'postres',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Bizcocho artesanal', 'Tres leches', 'Cacao ancestral', 'Mezcal Espadín']
  },

  // COCTELES & BEBIDAS
  {
    id: 'coc-1',
    name: 'Máscara Dorada (Cocktail de Autor)',
    subtitle: 'Mezcal Espadín, Maracuyá, Chile de Árbol & Escarcha de Sal de Gusano',
    description: 'Mixología insignia que combina la fuerza ahumada del mezcal Espadín artesanal con pulpa fresca de maracuyá, jarabe de chile de árbol y sal de gusano en el borde.',
    price: 65,
    category: 'cocteles',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800',
    tags: ['chef-choice', 'picante'],
    isPopular: true,
    spicinessLevel: 2,
    ingredients: ['Mezcal Espadín', 'Maracuyá', 'Chile de árbol', 'Sal de gusano de maguey']
  },
  {
    id: 'coc-2',
    name: 'El Santo Spritz',
    subtitle: 'Tequila Reposado, Aperol, Maracuyá & Prosecco',
    description: 'Bebida vibrante y refrescante con tequila reposado 100% agaves, liqueur Aperol, toronja rosada quemada y top de Prosecco italiano.',
    price: 60,
    category: 'cocteles',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Tequila reposado', 'Aperol', 'Toronja rosada', 'Prosecco']
  },
  {
    id: 'coc-3',
    name: 'Margarita Ahumada de Poblano',
    subtitle: 'Tequila Blanco, Ancho Reyes, Limón de Pica',
    description: 'Interpretación picante de la margarita tradicional con licor Ancho Reyes Verde, tequila blanco macerado en cilantro y brote de chile poblano asado.',
    price: 55,
    category: 'cocteles',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=800',
    spicinessLevel: 2,
    ingredients: ['Tequila blanco', 'Licor Ancho Reyes', 'Chile poblano', 'Limón de pica']
  },

  // ESPECIALES DEL CHEF
  {
    id: 'esp-1',
    name: 'Tomahawk al Pastor con Ananá Flambeado',
    subtitle: '32 oz de Ribeye en Hueso marinado en Achiote',
    description: 'Especialidad de la casa para compartir. Tomahawk Prime marinado 24 horas en achiote de Yucatán y chiles secos, asado a las brasas de leña de mezquite con piña flambeada al mezcal.',
    price: 380,
    category: 'especiales',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=800',
    tags: ['chef-choice', 'nuevo'],
    isPopular: true,
    ingredients: ['Tomahawk Prime 32oz', 'Achiote de Yucatán', 'Piña flambeada', 'Tortillas a mano']
  }
];
