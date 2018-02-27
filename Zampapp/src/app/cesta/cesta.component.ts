import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cesta',
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.css']
})
export class CestaComponent implements OnInit {
  listaCesta = [];
  // listaCesta = [
  //   {
  //     "ingredientes": [
  //       "bacon",
  //       "champiñon",
  //       "salsa carbonara",
  //       "mozzarella"
  //     ],
  //     "preferencia": [
  //       "sin frutos secos",
  //       "sin azucar",
  //       "sin fructosa"
  //     ],
  //     "_id": "5a9529c8eb14b628300aaeaf",
  //     "nombre": "Pizza Carbonara",
  //     "precio": 9,
  //     "restaurante": "TelePizza",
  //     "descripcion": "El inconfundible sabor de nuestra salsa carbonara con doble de bacon, champiñón y un extra de topping a base de mozzarella que la convierte en una elección segura.",
  //     "categoria": "pizzas",
  //     "cantidad": "para compartir",
  //     "pic": "nada picante",
  //     "temp": "caliente",
  //     "foto": "https://images.telepizza.com/vol/es/images/content/productos/pcaq_c.png",
  //     "valoracion": "4/5",
  //     "__v": 0
  //   },
  //   {
  //     "ingredientes": [],
  //     "preferencia": [],
  //     "_id": "5a9529c8eb14b628300aaeae",
  //     "nombre": "Pizza 4 quesos",
  //     "precio": 12.6,
  //     "restaurante": "Tagliatella",
  //     "descripcion": "Siente en tu paladar una fusión de sabores con nuestros mejores quesos y todo esto aderezado con tomate, simplemente espectacular.",
  //     "categoria": "pizzas",
  //     "cantidad": "para compartir",
  //     "pic": "nada picante",
  //     "temp": "caliente",
  //     "foto": "https://res.cloudinary.com/hesvvq3zo/image/upload/w_1000,h_500,c_pad,q_30/v1477472361/takeaway/Le-Pizze-4formaggi.jpg",
  //     "valoracion": "4/5",
  //     "__v": 0
  //   }]

  constructor() { }

  ngOnInit() {
    console.log(this.listaCesta);
  }

}
