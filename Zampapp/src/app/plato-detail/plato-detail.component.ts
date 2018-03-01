import { Component, OnInit, Input } 	from '@angular/core';
import { PlatoService } 				from '../plato.service';
import { ActivatedRoute }				from '@angular/router';
import { Location } 					from '@angular/common';
import { ResultadosComponent }			from '../resultados/resultados.component';
import { Router }						from '@angular/router';
import { ListacestaService } 			from '../listacesta.service';
import { Plato } 						from '../plato';

@Component({
	selector: 'app-plato-detail',
	templateUrl: './plato-detail.component.html',
	styleUrls: ['./plato-detail.component.css']
})
export class PlatoDetailComponent implements OnInit {
	@Input() plato;
	constructor(
		private route: ActivatedRoute,
		private platoService: PlatoService,
		private location: Location,
		private listaService: ListacestaService
	) { 
		this.listaService.onEsconderCesta.emit(true);
	}

	ngOnInit(): void {
		this.getPlato();
	}

	// Cargar plato
	getPlato(): void {
		const id = this.route.snapshot.params.id;
		this.platoService.getPlato(id)
			.subscribe(plato => {
				this.plato = plato;
			});
	}

	// Agregar plato a la cesta
	agregar_Cesta(objPlato, cantidad) {
		this.listaService.agragaPlato(objPlato, cantidad.value.num)   
	  }

}


