import { Component, OnInit } from '@angular/core';
import { PlatoService } from '../plato.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import 'rxjs/add/operator/map';
import { BusquedaService } from '../busqueda.service'
import { Busqueda } from '../busqueda';


@Component({
	selector: 'app-resultados',
	templateUrl: './resultados.component.html',
	styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {
<<<<<<< HEAD
	abierto=false;
    platos = [];
	listaFiltrada=[];

	categorias = ['Pizzas','Hamburguesas','Bocadillos', 'Arroces', 'Ensaladas', 'Pastas', 'Carnes', 'Pescados', 'Sopas', 'Sushi']
	cantidad = ['Para una persona','Para compartir']
	preferencias = ['Sin gluten', 'Sin frutos secos', 'Sin lactosa', 'Vegetariano', 'Vegano', 'Sin fructosa', 'Sin azucar', 'Sin huevo']


	
	
	abrircerrar(){
		this.abierto=this.abierto?false: true;
=======
	abierto = true;
	platos = [];
	listaFiltrada = [];
  estaEscondido=false;

	categorias = ['pizzas', 'hamburguesas', 'bocadillos', 'arroces', 'ensaladas', 'pastas', 'carnes', 'pescados', 'sopas', 'sushi']
	cantidad = ['para una persona', 'para compartir']
	preferencias = ['sin gluten', 'sin frutos secos', 'sin lactosa', 'vegetariano', 'vegano', 'sin fructosa', 'sin azucar', 'sin huevo']



	abrircerrar() {
		this.abierto = this.abierto ? false : true;
>>>>>>> 3ffc4326ac08cec017c4388a4e5a1d46ef3039bb
	}

	onCheckboxChange(categoria, event) {
		if (event.target.checked) {
			this.busquedaService.Busqueda[event.target.name].push(event.target.value);
		} else {
			for (var i = 0; i < this.categorias.length; i++) {
				if (this.busquedaService.Busqueda[event.target.name][i] == event.target.value) {
					this.busquedaService.Busqueda[event.target.name].splice(i, 1);
				}
			}
		}
		console.log(this.busquedaService.Busqueda);
	}

	constructor(private platoService: PlatoService, private busquedaService: BusquedaService) {
	}


<<<<<<< HEAD
		if(window.innerWidth>480){
			this.abierto=true;
		}
		if(window.innerWidth<480){
			this.abierto=false;
=======
	ngOnInit() {

		if (window.innerWidth >= 480) {
			this.abierto = false;
>>>>>>> 3ffc4326ac08cec017c4388a4e5a1d46ef3039bb
		}

		//this.users = this.usersService.users
		this.platoService.getPlatos().subscribe(platos => {
			this.platos = platos;
			this.onFilter();
			this.busquedaService.Busqueda = new Busqueda;
		});

	}

	onFilter() {
		this.listaFiltrada = [];
		if (this.busquedaService.Busqueda.categoria !== null) {
			for (let i = 0; i < this.busquedaService.Busqueda.categoria.length; i++) {
				this.listaFiltrada = this.listaFiltrada.concat(this.platos.filter(plato => plato.categoria == this.busquedaService.Busqueda.categoria[i]));
			}
		}

		if (this.busquedaService.Busqueda.cantidad !== null) {
			for (let i = 0; i < this.busquedaService.Busqueda.cantidad.length; i++) {
				this.listaFiltrada = this.listaFiltrada.concat(this.platos.filter(plato => plato.cantidad == this.busquedaService.Busqueda.cantidad[i]));
			}
		}

		if (this.busquedaService.Busqueda.preferencia !== null) {
			for (let i = 0; i < this.busquedaService.Busqueda.preferencia.length; i++) {
				this.listaFiltrada = this.listaFiltrada.concat(this.platos.filter(plato => plato.preferencia == this.busquedaService.Busqueda.preferencia[i]));
			}
		}

		if (this.busquedaService.Busqueda.picante !== null) {
			for (let i = 0; i < this.busquedaService.Busqueda.picante.length; i++) {
				this.listaFiltrada = this.listaFiltrada.concat(this.platos.filter(plato => plato.pic == this.busquedaService.Busqueda.picante[i]));
			}
		}

		if (this.busquedaService.Busqueda.temperatura !== null) {
			for (let i = 0; i < this.busquedaService.Busqueda.temperatura.length; i++) {
				this.listaFiltrada = this.listaFiltrada.concat(this.platos.filter(plato => plato.temp == this.busquedaService.Busqueda.temperatura[i]));
			}
		}

		this.listaFiltrada;
    if (this.listaFiltrada.length<0){
			this.estaEscondido = true;
		}
	}
}
