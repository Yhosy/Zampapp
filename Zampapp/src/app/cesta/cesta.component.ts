import { Component, OnInit, Output, EventEmitter,OnChanges } from '@angular/core';
import { ListacestaService } from "../listacesta.service";
import { Plato } from '../plato';
import { Observable } from "rxjs/Rx"

@Component({
  selector: 'app-cesta',
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.css']
})
export class CestaComponent implements OnInit,OnChanges {
  listaCesta: Array<Plato>;
  precioTotal;
  @Output() myCesta = new EventEmitter();

  constructor(private listaService: ListacestaService) { }
  
  ngOnInit() {
    this.listaCesta = this.listaService.leerLista();
    this.precioTotal=this.listaService.precioTotal;
  }

  ngOnChanges(){
    console.log("precioTotal!!!");
  }

  outCesta(){
    console.log('adios')
    this.myCesta.emit(false);
  }

}
