import { Component, OnInit, Input } from '@angular/core';
import { PlatoService } from '../plato.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ResultadosComponent } from '../resultados/resultados.component';

@Component({
  selector: 'app-plato-detail',
  templateUrl: './plato-detail.component.html',
  styleUrls: ['./plato-detail.component.css']
})
export class PlatoDetailComponent implements OnInit {
	@Input() plato;

  /*plato={
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
	}*/

  constructor(
	  private route: ActivatedRoute,
	  private platoService: PlatoService,
	  private location: Location
  	) { }

  ngOnInit(): void {
	  this.getPlato();
	}

	getPlato(): void {
	  const id = +this.route.snapshot.paramMap.get('id');
	  this.platoService.getPlato(id)
	    .subscribe(plato => {
	    	this.plato = plato[0];
	    });
	}

}
