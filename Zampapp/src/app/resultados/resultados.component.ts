import { Component, OnInit } 		from '@angular/core';
import { PlatoService } 			from '../plato.service';
import { ActivatedRoute } 			from '@angular/router';
import { FormControl, FormGroup } 	from '@angular/forms';
import { FormsModule } 				from '@angular/forms';
import { BusquedaService } 			from '../busqueda.service'
import { Busqueda } 				from '../busqueda';
import { ListacestaService } 		from '../listacesta.service';
import { URLSearchParams } 			from '@angular/http'
import 'rxjs/add/operator/map';


@Component({
	selector: 'app-resultados',
	templateUrl: './resultados.component.html',
	styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {
	platos: any;
	abierto = false;
	listaFiltrada = [];
	avisodx = false;
	categorias = ['pizzas', 'hamburguesas', 'bocadillos', 'arroces', 'ensaladas', 'pastas', 'carnes', 'pescados', 'sopas', 'sushi']
	cantidad = ['para una persona', 'para compartir']
	preferencias = ['sin gluten', 'sin frutos secos', 'sin lactosa', 'vegetariano', 'vegano', 'sin fructosa', 'sin azucar', 'sin huevo']
	constructor(private platoService: PlatoService,
		private busquedaService: BusquedaService,
		private listaService: ListacestaService) {
		this.listaService.onEsconderCesta.emit(true);
	}

	ngOnInit() {
		if (window.innerWidth >= 480) {
			this.abierto = true;
		}
		if (window.innerWidth <= 480) {
			this.abierto = false;
		}
		this.buscar();
	}
	
	// abre y cierra busqueda avanzada
	abrircerrar() {
		this.abierto = this.abierto ? false : true;
	}

	// actualiza el objeto busqueda
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
		let params = new URLSearchParams();
		for (let key in this.busquedaService.Busqueda) {
			params.set(key, this.busquedaService.Busqueda[key])

		}
	}

	// pinta los platos
	buscar() {
		this.platoService.getPlatos(this.busquedaService.Busqueda).subscribe(platos => {
			this.platos = platos;
			this.busquedaService.Busqueda = new Busqueda;
			if (this.platos.length == 0) {
				this.avisodx = true;
			} else {
				this.avisodx = false;
			}
		});
		return this.platos;
	}
}
