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


