import { Component, OnInit } from '@angular/core';
import { PlatoService } from '../plato.service';
import { ActivatedRoute} from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import  'rxjs/add/operator/map';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

    platos = [];
    public valores = {categoria: [], cantidad: [], preferencia: [], temp: [], pic: [], precio:[], proximidad:[]}
	searchStr="";
	search2Str="";
	listaFiltrada=[];

	categorias = ['pizzas','hamburguesas', 'arroces', 'ensaladas', 'pastas', 'carnes', 'sopas', 'sushi']
	cantidad = ['para una persona','para compartir']
	preferencias = ['sin gluten', 'sin frutos secos', 'sin lactosa', 'vegetariano', 'vegano', 'sin fructosa', 'sin azucar', 'sin huevo']

	obj={
		formData:{
		op1:false,
		op2:false,
		op3:false,
	}}

	onCheckboxChange(categoria, event) {
		if(event.target.checked) {
		  this.valores[event.target.name].push(event.target.value);
		} else {
		  for(var i=0 ; i < event.target.name.length; i++) {
		    if(this.valores[event.target.name][i] == event.target.value){
		      this.valores[event.target.name].splice(i,1);
		    }
		  }
		}
		return this.valores;
	}

	constructor(private usersService: UsersService){
	}
	

	ngOnInit(){
		//this.users = this.usersService.users
		this.usersService.getUsers().subscribe(platos => {
			console.log(platos);
			this.platos = platos;
		});
	}

	onFilter(){
		if(this.valores.categoria !== null){
			for(let i=0; i<this.valores.categoria.length; i++){
				this.listaFiltrada = this.listaFiltrada.concat(this.platos.filter(plato => plato.categoria == this.valores.categoria[i]));
			}
		}

		if(this.valores.cantidad !== null){
			for(let i=0; i<this.valores.cantidad.length; i++){
				this.listaFiltrada = this.listaFiltrada.filter(plato => plato.cantidad == this.valores.cantidad);
			}
		}

		if(this.valores.preferencia !== null){
			for(let i=0; i<this.valores.preferencia.length; i++){
				this.listaFiltrada = this.listaFiltrada.filter(plato => plato.preferencia == this.valores.preferencia);
			}
		}

		if (this.valores.pic !== null){
			for(let i=0; i<this.valores.pic.length; i++){
				this.listaFiltrada = this.listaFiltrada.filter(plato =>  plato.pic == this.valores.pic);
			}
		}

		if (this.valores.temp !== null){
			for(let i=0; i<this.valores.temp.length; i++){
				this.listaFiltrada = this.listaFiltrada.filter(plato =>  plato.temp == this.valores.temp);
			}
		}
		return this.listaFiltrada;
	}
}
