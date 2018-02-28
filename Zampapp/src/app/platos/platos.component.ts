import { Component, OnInit, Input } from '@angular/core';
import { Plato } from '../plato';
import { ListacestaService } from "../listacesta.service";


@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.css']
})
export class PlatosComponent implements OnInit {
  @Input() plato: Plato[];
  isMarcked = false;
  onClick() {
    this.isMarcked = true;
  }
  constructor(private listaService: ListacestaService) { }

  ngOnInit() {

  }

  agregar_Cesta(objPlato) {
    console.log(objPlato);
    this.listaService.agragaPlato(objPlato)   
  }

}
