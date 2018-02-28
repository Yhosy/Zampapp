import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ListacestaService } from "../listacesta.service";

@Component({
  selector: 'app-cesta',
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.css']
})
export class CestaComponent implements OnInit {
  listaCesta: Array<Object>;
  precioTotal: Number;
  @Output() myCesta = new EventEmitter();

  constructor(private listaService: ListacestaService) { }
  // 
  ngOnInit() {
    this.listaCesta = this.listaService.leerLista();
    this.precio();
  }

  precio() {
    this.precioTotal = 0;
    for (let i = 0; i < this.listaCesta.length; i++) {
      this.precioTotal += this.listaCesta[i].precio;
    }
          console.log(this.precioTotal);
  }

  outCesta(){
    console.log('adios')
    this.myCesta.emit(false);
  }

}
