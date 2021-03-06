const mongoose = require('mongoose'),
  Platos = require('./api/models/platoModel')

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Zampapp');

let arrPlatos = [
  {
    "nombre": "Pizza Pepperone Picante",
    "precio": "11.60",
    "restaurante": "Tagliatella",
    "ingredientes": [
      "tomate",
      "mozzarella",
      "salami",
      "salami picante"
    ],
    "descripcion": "Prueba la nueva Telepizza del mes Pepe Peperoni: doble ración de pepperoni y topping a base de mozzarella. ¿Podrás resistirte?",
    "categoria": "pizzas",
    "cantidad": "para compartir",
    "pic": "picante",
    "temp": "caliente",
    "preferencia": ["sin huevo", "sin frutos secos", "sin azucar", "sin fructosa"],
    "foto": "https://res.cloudinary.com/hesvvq3zo/image/upload/w_1000,h_500,c_pad,q_30/v1477472361/takeaway/Le-Pizze-Pepperoni.jpg",
    "valoracion": "5/5"
  },
  {
    "nombre": "Pizza 4 quesos",
    "precio": "12.60",
    "restaurante": "Tagliatella",
    "ingredientes": [
      "tomate",
      "grana padano",
      "mozzarella",
      "gorgonzola",
      "emmental"
    ],
    "descripcion": "Siente en tu paladar una fusión de sabores con nuestros mejores quesos y todo esto aderezado con tomate, simplemente espectacular.",
    "categoria": "pizzas",
    "cantidad": "para compartir",
    "pic": "nada picante",
    "temp": "caliente",
    "preferencia": ["sin huevo", "sin frutos secos", "sin azucar", "vegetariano", "sin fructosa"],
    "foto": "https://res.cloudinary.com/hesvvq3zo/image/upload/w_1000,h_500,c_pad,q_30/v1477472361/takeaway/Le-Pizze-4formaggi.jpg",
    "valoracion": "4/5"
  },
  {
    "nombre": "Pizza Carbonara",
    "precio": "9",
    "restaurante": "TelePizza",
    "ingredientes": [
      "bacon",
      "champiñon",
      "salsa carbonara",
      "mozzarella"
    ],
    "descripcion": "El inconfundible sabor de nuestra salsa carbonara con doble de bacon, champiñón y un extra de topping a base de mozzarella que la convierte en una elección segura.",
    "categoria": "pizzas",
    "cantidad": "para compartir",
    "pic": "nada picante",
    "temp": "caliente",
    "preferencia": ["sin frutos secos", "sin azucar", "sin fructosa"],
    "foto": "https://images.telepizza.com/vol/es/images/content/productos/pcaq_c.png",
    "valoracion": "4/5"
  },
  {
    "nombre": "Pizza Boloñesa",
    "precio": "7",
    "restaurante": "TelePizza",
    "ingredientes": [
      "carne de vacuno",
      "mozzarella",
      "tomate confitado",
      "queso"
    ],
    "descripcion": "Doble ración de carne de vacuno, topping a base de mozzarella y extra de salsa de tomate confitado.",
    "categoria": "pizzas",
    "cantidad": "para compartir",
    "pic": "nada picante",
    "temp": "caliente",
    "preferencia": ["sin huevo", "sin frutos secos", "sin fructosa"],
    "foto": "https://images.telepizza.com/vol/es/images/content/productos/bolo_c.png",
    "valoracion": "4/5"
  },
  {
    "nombre": "Pizza Hawaiana",
    "precio": "7",
    "restaurante": "TelePizza",
    "ingredientes": [
      "masa fresca",
      "jamón york",
      "piña",
      "mozzarella",
      "tomate"
    ],
    "descripcion": "Prueba nuestra Telepizza con la receta más tropical, piña, doble de york y extra de topping a base de mozzarella y déjate seducir por los sabores más exóticos, ¡aloha!",
    "categoria": "pizzas",
    "cantidad": "para compartir",
    "pic": "nada picante",
    "temp": "caliente",
    "preferencia": ["sin huevo", "sin frutos secos", "sin azucar", "sin fructosa"],
    "foto": "https://images.telepizza.com/vol/es/images/content/productos/phw_c.png",
    "valoracion": "3/5"
  },
  {
    "nombre": "Pizza Carbonara Cebolla",
    "precio": "7",
    "restaurante": "TelePizza",
    "ingredientes": [
      "masa fresca",
      "bacon",
      "champiñon",
      "salsa carbonara",
      "mozzarella",
      "cebolla"
    ],
    "descripcion": "Combina tu salsa carbonara favorita con cebolla, doble de bacon y champiñón. Una mezcla que te encantará.",
    "categoria": "pizzas",
    "cantidad": "para compartir",
    "pic": "nada picante",
    "temp": "caliente",
    "preferencia": ["sin frutos secos", "sin azucar", "sin fructosa"],
    "foto": "https://images.telepizza.com/vol/es/images/content/productos/pcar_c.png",
    "valoracion": "4/5"
  },
  {
    "nombre": "Pizza Rodeo",
    "precio": "7",
    "restaurante": "TelePizza",
    "ingredientes": [
      "carne de vacuno",
      "bacon",
      "salsa steak",
      "salsa grill",
      "mozzarella"
    ],
    "descripcion": "La nueva Telepizza Rodeo compuesta por: carne de vacuno, bacon, salsa steak&grill y topping a base de mozzarella. No dejes pasar esta oportunidad y ¡Disfruta!",
    "categoria": "pizzas",
    "cantidad": "para compartir",
    "pic": "nada picante",
    "temp": "caliente",
    "preferencia": ["sin frutos secos", "sin azucar", "sin huevo"],
    "foto": "https://images.telepizza.com/vol/es/images/content/productos/rode_c.png",
    "valoracion": "4/5"
  },
  {
    "nombre": "Pizza Ibérica de TelePizza",
    "precio": "7",
    "restaurante": "TelePizza",
    "ingredientes": [
      "jamón ibérico de cebo",
      "tomate natural",
      "aceite de oliva",
      "masa fresca"
    ],
    "descripcion": "Una exquisita selección de jamón ibérico de cebo acompañado de finas rodajas de tomate natural y un toque de aceite de oliva sobre una crujiente masa",
    "categoria": "pizzas",
    "cantidad": "para compartir",
    "pic": "nada picante",
    "temp": "caliente",
    "preferencia": ["sin frutos secos", "sin azucar", "sin huevo"],
    "foto": "https://images.telepizza.com/vol/es/images/content/productos/iber_c.png",
    "valoracion": "5/5"
  },
  {
    "nombre": "Pizza Burger",
    "precio": "7",
    "restaurante": "TelePizza",
    "ingredientes": [
      "queso cheddar",
      "carne de vacuno",
      "tomate natural",
      "pepinillos",
      "mozzarella",
      "bacon cripsy",
      "salsa burger"
    ],
    "descripcion": "Auténtico sabor burger en cada bocado. Queso cheddar, carne de vacuno, tomate natural y pepinillos, cubiertos con una masa con topping a base de mozzarella, bacon crispy y salsa burger.",
    "categoria": "pizzas",
    "cantidad": "para compartir",
    "pic": "nada picante",
    "temp": "caliente",
    "preferencia": ["sin frutos secos", "sin azucar", "sin huevo"],
    "foto": "https://images.telepizza.com/vol/es/images/content/productos/p3pb_c.png",
    "valoracion": "3/5"
  },
  {
    "nombre": "Pizza Barbacoa Gourmet",
    "precio": "7",
    "restaurante": "TelePizza",
    "ingredientes": [
      "5 quesos",
      "pollo marinado",
      "bacon ahumado",
      "carne de vacuno",
      "salsa barbacoa",
      "mozzarella"
    ],
    "descripcion": "La mejor barbacoa de nuestra historia. Una mezcla de 5 quesos, tiras de pollo marinado, bacon ahumado, doble ración de carne de vacuno, salsa barbacoa y topping a base de mozzarella.",
    "categoria": "pizzas",
    "cantidad": "para compartir",
    "pic": "nada picante",
    "temp": "caliente",
    "preferencia": ["sin frutos secos", "sin azucar", "sin huevo"],
    "foto": "https://images.telepizza.com/vol/es/images/content/productos/53bq_c.png",
    "valoracion": "5/5"
  },
  {
    "nombre": "Pizza Carbonara Gourmet Queso",
    "precio": "7",
    "restaurante": "TelePizza",
    "ingredientes": [
      "5 quesos",
      "masa fina",
      "bacon",
      "champiñón",
      "salsa carbonara",
      "mozzarella"
    ],
    "descripcion": "La mejor carbonara de nuestra historia. Una pizza mediana mezcla de 5 quesos cubierta de una masa fina con doble ración de bacon, champiñón, salsa carbonara y extra de topping a base de mozzarella",
    "categoria": "pizzas",
    "cantidad": "para compartir",
    "pic": "nada picante",
    "temp": "caliente",
    "preferencia": ["sin frutos secos", "sin azucar", "sin huevo"],
    "foto": "https://images.telepizza.com/vol/es/images/content/productos/tkgq_c.png",
    "valoracion": "5/5"
  },
  {
    "nombre": "Pizza Carbonara Gourmet Cebolla",
    "precio": "7",
    "restaurante": "TelePizza",
    "ingredientes": [
      "5 quesos",
      "masa fina",
      "bacon",
      "champiñón",
      "salsa carbonara",
      "cebolla"
    ],
    "descripcion": "La mejor carbonara de nuestra historia. Una pizza mediana mezcla de 5 quesos cubierta de una masa fina con doble ración de bacon, champiñón, salsa carbonara y cebolla.",
    "categoria": "pizzas",
    "cantidad": "para compartir",
    "pic": "nada picante",
    "temp": "caliente",
    "preferencia": ["sin frutos secos", "sin azucar", "sin huevo"],
    "foto": "https://images.telepizza.com/vol/es/images/content/productos/tkgo_c.png",
    "valoracion": "5/5"
  },
  {
    "nombre": "Pizza Telepizza Vulcano Nachos",
    "precio": "7",
    "restaurante": "TelePizza",
    "ingredientes": [
      "5 quesos",
      "masa fina",
      "bacon",
      "champiñón",
      "salsa carbonara",
      "cebolla"
    ],
    "descripcion": "Empieza dipeando los nachos paprika en la deliciosa fuente de queso cheddar y termina con un sabroso bocado de pizza con los ingredientes que más te gusten.",
    "categoria": "pizzas",
    "cantidad": "para compartir",
    "pic": "nada picante",
    "temp": "caliente",
    "preferencia": ["sin frutos secos", "sin azucar", "sin huevo"],
    "foto": "https://images.telepizza.com/vol/es/images/content/productos/tkgo_c.png",
    "valoracion": "2/5"
  },
  {
    "nombre": "Pizza Bacon Cheeseburger",
    "precio": "7",
    "restaurante": "TelePizza",
    "ingredientes": [
      "masa fresca",
      "bacon",
      "mini hamburguesas",
      "queso cheddar",
      "mozzarella",
      "salsa burger",
      "tomate natural",
    ],
    "descripcion": "Si habéis soñado con una mezcla perfecta entre Telepizza y hamburguesa aquí la tenéis: salsa burger, topping a base de mozzarella, tomate natural, bacon, queso cheddar coronada con deliciosas mini hamburguesas.",
    "categoria": "pizzas",
    "cantidad": "para compartir",
    "pic": "nada picante",
    "temp": "caliente",
    "preferencia": ["sin frutos secos", "sin azucar", "sin huevo"],
    "foto": "https://images.telepizza.com/vol/es/images/content/productos/pzbc_c.png",
    "valoracion": "3/5"
  },
  {
    "nombre": "Pizza Barbacoa Crème Queso",
    "precio": "7",
    "restaurante": "TelePizza",
    "ingredientes": [
      "masa fresca",
      "bacon",
      "champiñón",
      "pollo",
      "mozzarella",
      "salsa barbacoa",
      "salsa carbonara"
    ],
    "descripcion": "Cuando unes dos de nuestras mejores salsas el resultado es excepcional, barbacoa y carbonara acompañadas de pollo, bacon, champiñón y un extra de topping a base de mozzarella para un sabor sorprendente.",
    "categoria": "pizzas",
    "cantidad": "para compartir",
    "pic": "nada picante",
    "temp": "caliente",
    "preferencia": ["sin frutos secos", "sin azucar"],
    "foto": "https://images.telepizza.com/vol/es/images/content/productos/pbcq_c.png",
    "valoracion": "3/5"
  },
  {
    "nombre": "Pizza Jalisco",
    "precio": "7",
    "restaurante": "TelePizza",
    "ingredientes": [
      "masa fresca",
      "aceitunas negras",
      "cebolla",
      "pimiento morrón",
      "carne de vacuno"
    ],
    "descripcion": "Nuestra telepizza con receta mejicana, salsa jalisco, carne de vacuno, cebolla, pimiento morrón, aceitunas negras.¡Pruébala manito!",
    "categoria": "pizzas",
    "cantidad": "para compartir",
    "pic": "picante",
    "temp": "caliente",
    "preferencia": ["sin frutos secos", "sin azucar", "sin huevo"],
    "foto": "https://images.telepizza.com/vol/es/images/content/productos/jali_c.png",
    "valoracion": "4/5"
  },
  {
    "nombre": "Chicken McRoll",
    "precio": "2.5",
    "restaurante": "McDonals",
    "ingredientes": [
      "tortilla",
      "tomate",
      "mayonesa",
      "pollo crujiente"
    ],
    "descripcion": "Disfruta de nuestro inconfundible pollo crujiente acompañado de tomate, lechuga y mayonesa. ¡Bien envuelto en una rica tortilla para que no se te escape!",
    "categoria": "rolls",
    "cantidad": "para una persona",
    "pic": "nada picante",
    "temp": "caliente",
    "preferencia": ["sin frutos secos", "sin azucar", "sin huevo"],
    "foto": "https://www.mcdonalds.es/sites/default/files/produits/477x360_mcwrap_0.png",
    "valoracion": "5/5"
  },
  {
    "nombre": "Miso Ramen",
    "precio": "9.95",
    "restaurante": "Udon",
    "ingredientes": [
      "fideos",
      "miso",
      "caldo de pollo",
      "soja",
      "cerdo",
      "algas wakame",
      "huevo",
      "alga nori",
      "cebolleta tierna",
    ],
    "descripcion": "Fideos Ramen con caldo de pollo elaborado con soja y miso. Con láminas de cerdo marinado (chashu), algas wakame, huevo de corral semicocido y marinado, alga nori y cebolleta tierna",
    "categoria": "sopas",
    "cantidad": "para una persona",
    "pic": "agridulce",
    "temp": "caliente",
    "preferencia": ["sin frutos secos", "sin azucar", , "sin fructosa"],
    "foto": "http://www.udon.es/products/images/Miso_Soup_G_1.jpg",
    "valoracion": "4/5"
  },
  {
    "nombre": "Tempra Soba",
    "precio": "9.95",
    "restaurante": "Udon",
    "ingredientes": [
      "caldo",
      "soba",
      "tempura de verduras",
      "tempura de langostino",
      "alga nori"
    ],
    "descripcion": "Soba con una deliciosa y crujiente tempura de verduras ecológicas y langostino con alga nori",
    "categoria": "tempuras",
    "cantidad": "para una persona",
    "pic": "agridulce",
    "temp": "caliente",
    "preferencia": ["sin frutos secos", "sin azucar", "sin huevo"],
    "foto": "http://www.udon.es/products/images/Tempura_soba_G896.jpg",
    "valoracion": "5/5"
  },
  {
    "nombre": "Oyako Don",
    "precio": "9.35",
    "restaurante": "Udon",
    "ingredientes": [
      "arroz",
      "pollo rebozado",
      "cebolla",
      "setas shiitake",
      "dashi",
      "huevo revuelto",
      "salsa tonkatsu",
      "cebollino"
    ],
    "descripcion": "Arroz con tiras de contramuslo de pollo rebozadas, cebolla, setas shiitake, dashi, huevo revuelto, salsa tonkatsu y cebollino",
    "categoria": "arroces",
    "cantidad": "para una persona",
    "pic": "agridulce",
    "temp": "caliente",
    "preferencia": ["sin frutos secos", "sin azucar"],
    "foto": "http://udon.es/products/images/Oyako_Don_G.jpg",
    "valoracion": "4/5"
  },
  {
    "nombre": "Yakimeshi Don",
    "precio": "9.35",
    "restaurante": "Udon",
    "ingredientes": [
      "arroz",
      "secreto de Cerdo",
      "maíz",
      "cebolleta",
      "zanahoria",
      "setas shiitake",
      "calabacín",
      "brotes de soja",
      "maíz dulce",
      "salsa de soja Kikkoman"
    ],
    "descripcion": "Arroz salteado con secreto de cerdo de granja, cebolleta, zanahoria, setas shiitake, calabacín, brotes de soja y maíz dulce. Con salsa de soja Kikkoman",
    "categoria": "arroces",
    "cantidad": "para una persona",
    "pic": "agridulce",
    "temp": "caliente",
    "preferencia": ["sin frutos secos", "sin azucar", "sin huevo", "sin fructosa"],
    "foto": "http://www.udon.es/products/images/Yakimeshi_Don_G.jpg",
    "valoracion": "5/5"
  },
  {
    "nombre": "Kaesar Asian Salad",
    "precio": "8.45",
    "restaurante": "Udon",
    "ingredientes": [
      "aguacate",
      "tomate cherry",
      "pechuga de pollo rebozado con maiz tostado",
      "salsa césar",
      "dashi",
      "chips de maiz",
      "cacahuete",
      "parmesano"
    ],
    "descripcion": "Ensalada verde con aguacate, tomate cherry, dados de pechuga de pollo de corral rebozado con maíz tostado, salsa césar con dashi, chips crujientes de maíz, cacahuetes y parmesano rallado",
    "categoria": "ensaladas",
    "cantidad": "para una persona",
    "pic": "nada picante",
    "temp": "frío",
    "preferencia": ["sin frutos secos", "sin azucar", "sin huevo"],
    "foto": "http://www.udon.es/products/images/CAESARSALADG.jpg",
    "valoracion": "4/5"
  },
  {
    "nombre": "Big Mac",
    "precio": "4.20",
    "restaurante": "McDonals",
    "ingredientes": [
      "carne de vacuno",
      "lechuga",
      "cebolla",
      "pepinillo",
      "queso cheddar",
      "pan de sésamo"
    ],
    "descripcion": "Dos jugosas hamburguesas de carne 100% vacuno español, lechuga fresca y crujiente, cebolla, pepinillo, queso Cheddar fundido y nuestra inimitable salsa secreta. Todo esto envuelto en un nuevo pan de sésamo horneado al estilo tradicional.",
    "categoria": "hamburguesas",
    "cantidad": "para una persona",
    "pic": "nada picante",
    "temp": "caliente",
    "preferencia": ["sin azucar", "sin huevo"],
    "foto": "https://www.mcdonalds.es/sites/default/files/produits/477x360_bm.png",
    "valoracion": "4/5"
  },
  {
    "nombre": "Grand McExtreme™ Chiken Crispy Cheese",
    "precio": "5.50",
    "restaurante": "McDonals",
    "ingredientes": [
      "pollo crujiente",
      "cebolla crispy",
      "queso gouda",
      "lechuga",
      "salsa de queso"
    ],
    "descripcion": "Delicioso pollo crujiente 100% origen español, cebolla crispy y asada, queso Gouda, lechuga Batavia y una irresistible salsa cremosa de queso. ¿Se te ha hecho ya la boca agua?",
    "categoria": "hamburguesas",
    "cantidad": "para una persona",
    "pic": "nada picante",
    "temp": "caliente",
    "preferencia": ["sin huevo", "sin lactosa"],
    "foto": "https://www.mcdonalds.es/sites/default/files/produits/477x360_chickenbells.png",
    "valoracion": "5/5"
  },
  {
    "nombre": "Mediterranean Tuna",
    "precio": "5.55",
    "restaurante": "McDonals",
    "ingredientes": [
      "atún",
      "pimiento rojo",
      "pimiento amarillo",
      "lechuga",
      "croutons",
      "pan"
    ],
    "descripcion": "¡Nuestra base más fresca acompañado de nuestros productos más frescos! Disfruta de esta deliciosa ensalada de atún con la mejor variedad de pimientos y crujientes croutons.",
    "categoria": "ensaladas",
    "cantidad": "para una persona",
    "pic": "nada picante",
    "temp": "frío",
    "preferencia": ["sin huevo", "sin lactosa", "sin frutos secos", "sin fructosa"],
    "foto": "https://www.mcdonalds.es/sites/default/files/produits/mediterraneantuna477.png",
    "valoracion": "3/5"
  },
  {
    "nombre": "Wowburger",
    "precio": "5.6",
    "restaurante": "La trocadero",
    "ingredientes": [
      "remolacha",
      "mostaza",
      "pepinillos",
      "cebolla caramelizada",
      "espinacas",
      "lechuga",
      "jalapeños",
      "pan vegano"
    ],
    "descripcion": "Vegan burger ecológica de remolacha, pepinillos, cebolla caramelizada, espinaca baby, lechuga trocadero, y jalapeños.",
    "categoria": "hamburguesas",
    "cantidad": "para una persona",
    "pic": "picante",
    "temp": "caliente",
    "preferencia": ["vegano", "sin huevo", "vegetariano", "sin lactosa", "sin frutos secos"],
    "foto": "http://www.latrocadero.com/wp-content/uploads/2017/10/wowburger-300x294.png",
    "valoracion": "4/5"
  },
  {
    "nombre": "Setburg",
    "precio": "5.95",
    "restaurante": "La trocadero",
    "ingredientes": [
      "hamburguesa de setas",
      "rúcula",
      "tomate concentrado",
      "cebolla roja",
      "queso vegano",
      "salsa pesto vegana",
      "pesto",
      "pan vegano"
    ],
    "descripcion": "Vegan burger ecológica de setas, rúcula, tomate concentrado, cebolla roja, queso vegano, y salsa pesto vegana.",
    "categoria": "hamburguesas",
    "cantidad": "para una persona",
    "pic": "nada picante",
    "temp": "caliente",
    "preferencia": ["vegano", "sin huevo", "vegetariano", "sin lactosa"],
    "foto": "http://www.latrocadero.com/wp-content/uploads/2017/10/setburg-300x288.png",
    "valoracion": "3/5"
  },
  {
    "nombre": "Setbacon",
    "precio": "5.95",
    "restaurante": "La trocadero",
    "ingredientes": [
      "hamburguesa de setas",
      "bacon vegano",
      "cebolla caramelizada",
      "lechuga trocadero",
      "tomate fresco",
      "salsa curry",
      "pan vegano"
    ],
    "descripcion": "Vegan burger ecológica de setas, vegan bacon, cebolla caramelizada, lechuga trocadero, tomate fresco, y salsa curry.",
    "categoria": "hamburguesas",
    "cantidad": "para una persona",
    "pic": "picante",
    "temp": "caliente",
    "preferencia": ["vegano", "sin huevo", "vegetariano", "sin lactosa", "sin frutos secos"],
    "foto": "http://www.latrocadero.com/wp-content/uploads/2017/10/setbacon-300x257.png",
    "valoracion": "5/5"
  },
  {
    "nombre": "LTClaccic",
    "precio": "5.95",
    "restaurante": "La trocadero",
    "ingredientes": [
      "remolacha",
      "bacon vegano",
      "cebolla roja",
      "pepinillos",
      "rúcula",
      "lechuga trocadero",
      "lechuga",
      "pan vegano",
      "queso vegano",
      "veganesa",
      "ketchup"
    ],
    "descripcion": "Vegan burger ecológica de setas, vegan bacon, cebolla caramelizada, lechuga trocadero, tomate fresco, y salsa curry.",
    "categoria": "hamburguesas",
    "cantidad": "para una persona",
    "pic": "nada picante",
    "temp": "caliente",
    "preferencia": ["vegano", "sin huevo", "vegetariano", "sin lactosa", "sin frutos secos"],
    "foto": "http://www.latrocadero.com/wp-content/uploads/2017/10/Ltclasic-300x288.png",
    "valoracion": "4/5"
  },
  {
    "nombre": "Falburger",
    "precio": "5.75",
    "restaurante": "La trocadero",
    "ingredientes": [
      "falafel",
      "tomate concentrado",
      "cebolla roja",
      "pepinillos",
      "espinacas",
      "aceitunas negras",
      "lechuga trocadero",
      "ajonesa",
      "hummus"
    ],
    "descripcion": "Vegan burger ecológica de falafel, tomate concentrado, cebolla roja, pepinillos, lechuga trocadero, espinaca baby, aceitunas negras, ajonesa y hummus.",
    "categoria": "hamburguesas",
    "cantidad": "para una persona",
    "pic": "nada picante",
    "temp": "caliente",
    "preferencia": ["vegano", "sin huevo", "vegetariano", "sin lactosa", "sin frutos secos", "sin fructosa"],
    "foto": "http://www.latrocadero.com/wp-content/uploads/2017/10/falburger-300x261.png",
    "valoracion": "4/5"
  },
  {
    "nombre": "Campburg",
    "precio": "5.75",
    "restaurante": "La trocadero",
    "ingredientes": [
      "zanahoria",
      "cebolla",
      "pimiento rojo asado",
      "pimiento rojo",
      "cebolla caramelizada",
      "rúcula",
      "pan vegano",
      "lechuga trocadero",
      "queso vegano",
      "veganesa",
      "mostaza"
    ],
    "descripcion": "Vegan burger ecológica de zanahoria y cebolla, pimiento rojo asado, cebolla caramelizada, rúcula, lechuga trocadero, queso vegano, veganesa, y mostaza.",
    "categoria": "hamburguesas",
    "cantidad": "para una persona",
    "pic": "nada picante",
    "temp": "caliente",
    "preferencia": ["vegano", "sin huevo", "vegetariano", "sin lactosa", "sin frutos secos"],
    "foto": "http://www.latrocadero.com/wp-content/uploads/2017/10/CAMPBURG-300x254.png",
    "valoracion": "3/5"
  },
  {
    "nombre": "Salmon avocado roll",
    "precio": "4.25",
    "restaurante": "Udon",
    "ingredientes": [
      "salmón",
      "aguacate",
      "tartar de mango",
      "salsa de mango",
      "salsa de sésamo",
      "brotes"
    ],
    "descripcion": "Cuatro noodle rolls con salmón, aguacate, tartar de mango, salsa de sésamo y brotes",
    "categoria": "sushi",
    "cantidad": "para una persona",
    "pic": "nada picante",
    "temp": "frio",
    "preferencia": ["sin huevo", "sin lactosa"],
    "foto": "http://www.udon.es/products/images/Salmon_Avocado_Roll_G.jpg",
    "valoracion": "5/5"
  },
  {
    "nombre": "Tatiyaki de salmón",
    "precio": "5.25",
    "restaurante": "Udon",
    "ingredientes": [
      "salmón marinado",
      "soja",
      "limón",
      "wasabi",
      "aceite de sésamo",
      "mirin",
      "salsa teriyaki",
      "dados de aguacate con sésamo"
    ],
    "descripcion": "Salmón marinado con soja, limón, wasabi, aceite de sésamo y mirin. Marcado a la plancha, fileteado y acompañado con salsa teriyaki y dados de aguacate con sésamo",
    "categoria": "pescados",
    "cantidad": "para una persona",
    "pic": "picante",
    "temp": "frio",
    "preferencia": ["sin huevo", "sin lactosa"],
    "foto": "http://www.udon.es/products/images/Tataki_Salmon_G3606.jpg",
    "valoracion": "4/5"
  },
  {
    "nombre": "Tataki de ternera",
    "precio": "6.25",
    "restaurante": "Udon",
    "ingredientes": [
      "lomo de buey macerado",
      "soja",
      "mirin",
      "aceite de sésamo",
      "chips de espinacas",
      "salsa teriyaki"
    ],
    "descripcion": "Lomo de buey macerado con soja, mirin y aceite de sésamo acompañado de chips de espinacas. Marcado a la plancha, fileteado y acompañado con salsa teriyaki",
    "categoria": "carnes",
    "cantidad": "para una persona",
    "pic": "nada picante",
    "temp": "frio",
    "preferencia": ["sin huevo", "sin lactosa"],
    "foto": "http://www.udon.es/products/images/Tataki_Buey_G.jpg",
    "valoracion": "4/5"
  },
  {
    "nombre": "Top Sándwich York",
    "precio": "4.95",
    "restaurante": "Telepizza",
    "ingredientes": [
      "jamón york",
      "salsa especial",
      "bacon crispy",
      "queso edam",
      "queso cheddar"
    ],
    "descripcion": "¿Es una hamburguesa? ¿Es un bocadillo? Es nuestro sándwich de york acompañado con una salsa especial, york, bacon crispy,loncha queso edam y cheddar.",
    "categoria": "bocadillos",
    "cantidad": "para una persona",
    "pic": "nada picante",
    "temp": "caliente",
    "preferencia": ["sin huevo", "sin lactosa"],
    "foto": "https://images.telepizza.com/vol/es/images/content/productos/tsj_c.png",
    "valoracion": "4/5"
  }
]

for (let i = 0; i < arrPlatos.length; i++) {
  let new_plato = new Platos(arrPlatos[i]);
  // arrPlatos[i].save();
  new_plato.save();
}

console.log('Data created');