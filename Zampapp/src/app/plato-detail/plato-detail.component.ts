import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plato-detail',
  templateUrl: './plato-detail.component.html',
  styleUrls: ['./plato-detail.component.css']
})
export class PlatoDetailComponent implements OnInit {

  plato={
		nombre: 'Pizza Carbonara Cebolla',
		precio: 7,
		restaurante: 'TelePizza',
		ingredientes: [
			'masa fresca',
			'bacon',
			'champiñon',
			'salsa carbonara',
			'mozzarella',
			'cebolla',
			'crema',
			'carbonara',
			'queso'
		],
		descripcion: 'Masa fresca, doble de bacon, champiñón, salsa carbonara, topping a base de mozzarella y cebolla',
		categoria: 'pizzas',
		cantidad: 'para compartir',
		pic:'nada picante',
		temp:'caliente',
		alergia:[],
		preferencia: '',
		foto: 'https://images.telepizza.com/vol/es/images/content/productos/pcar_c.png'
	}

  constructor() { }

  ngOnInit() {
  }

}
