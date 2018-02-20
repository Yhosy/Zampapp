import { Component, OnInit } from '@angular/core';
import { PlatoService } from '../plato.service';
import { ActivatedRoute} from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import  'rxjs/add/operator/map';
import { BusquedaService } from '../busqueda.service'


@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

    platos = [];
	listaFiltrada=[];

	categorias = ['pizzas','hamburguesas', 'arroces', 'ensaladas', 'pastas', 'carnes', 'sopas', 'sushi']
	cantidad = ['para una persona','para compartir']
	preferencias = ['sin gluten', 'sin frutos secos', 'sin lactosa', 'vegetariano', 'vegano', 'sin fructosa', 'sin azucar', 'sin huevo']


	onCheckboxChange(categoria, event) {
		 if(event.target.checked) {
		  this.busquedaService.Busqueda[event.target.name].push(event.target.value);
		} else {
		  for(var i=0 ; i < this.categorias.length; i++) {
		    if(this.busquedaService.Busqueda[event.target.name][i] == event.target.value){
		      this.busquedaService.Busqueda[event.target.name].splice(i,1);
		    }
		  }
		}
		console.log(this.busquedaService.Busqueda);
	}

	constructor(private platoService: PlatoService, private busquedaService: BusquedaService){
	}
	

	ngOnInit(){
		
		//this.users = this.usersService.users
		this.platoService.getPlatos().subscribe(platos => {
			console.log(platos);
			this.platos = platos;
			this.listaFiltrada=[];

			for(let i=0; i<this.busquedaService.Busqueda.categoria.length; i++){
				this.listaFiltrada = this.listaFiltrada.concat(this.platos.filter(plato => plato.categoria == this.busquedaService.Busqueda.categoria[i]));
			}
			for(let i=0; i<this.busquedaService.Busqueda.cantidad.length; i++){
				this.listaFiltrada = this.listaFiltrada.concat(this.platos.filter(plato => plato.cantidad == this.busquedaService.Busqueda.cantidad[i]));
			}
			for(let i=0; i<this.busquedaService.Busqueda.temperatura.length; i++){
				this.listaFiltrada = this.listaFiltrada.concat(this.platos.filter(plato => plato.temp == this.busquedaService.Busqueda.temperatura[i]));
			}
			for(let i=0; i<this.busquedaService.Busqueda.preferencia.length; i++){
				this.listaFiltrada = this.listaFiltrada.concat(this.platos.filter(plato => plato.preferencia == this.busquedaService.Busqueda.preferencia[i]));
			}
			for(let i=0; i<this.busquedaService.Busqueda.picante.length; i++){
				this.listaFiltrada = this.listaFiltrada.concat(this.platos.filter(plato => plato.pic == this.busquedaService.Busqueda.picante[i]));
			}
			this.listaFiltrada = this.listaFiltrada.reduce(function(acc, el, i, arr) {
			  if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(el); return acc;
			}, []);
			console.log("lista filtrada", this.listaFiltrada);
		});
	}

	onFilter(){
		this.listaFiltrada=[];
		if(this.busquedaService.Busqueda.categoria !== null){
			for(let i=0; i<this.busquedaService.Busqueda.categoria.length; i++){
				this.listaFiltrada = this.listaFiltrada.concat(this.platos.filter(plato => plato.categoria == this.busquedaService.Busqueda.categoria[i]));
			}
		}

		if(this.busquedaService.Busqueda.cantidad !== null){
			for(let i=0; i<this.busquedaService.Busqueda.cantidad.length; i++){
				this.listaFiltrada = this.listaFiltrada.filter(plato => plato.cantidad == this.busquedaService.Busqueda.cantidad);
			}
		}

		if(this.busquedaService.Busqueda.preferencia !== null){
			for(let i=0; i<this.busquedaService.Busqueda.preferencia.length; i++){
				this.listaFiltrada = this.listaFiltrada.filter(plato => plato.preferencia == this.busquedaService.Busqueda.preferencia);
			}
		}

		if (this.busquedaService.Busqueda.picante !== null){
			for(let i=0; i<this.busquedaService.Busqueda.picante.length; i++){
				this.listaFiltrada = this.listaFiltrada.filter(plato =>  plato.pic == this.busquedaService.Busqueda.picante);
			}
		}

		if (this.busquedaService.Busqueda.temperatura !== null){
			for(let i=0; i<this.busquedaService.Busqueda.temperatura.length; i++){
				this.listaFiltrada = this.listaFiltrada.filter(plato =>  plato.temp == this.busquedaService.Busqueda.temperatura);
			}
		}
		return this.listaFiltrada;
	}
}
