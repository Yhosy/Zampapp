import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ListacestaService {
  listaCesta = [];
  onEsconderCesta: EventEmitter<boolean>;
  precioTotal={val:0};
  constructor() {
    this.onEsconderCesta = new EventEmitter();
  }

damePrecio(){
  return Observable.of(this.precioTotal);
}

  agragaPlato(obj, cantidad) {
    for (let i = 0; i < cantidad; i++) {
      this.listaCesta.push(obj);
    }
    this.precioTotal.val += obj.precio*cantidad;
    console.log("precioTotal.val:", this.precioTotal);
  }

  leerLista() {
    return this.listaCesta
  }

  eliminaPlato() { }

  precio() {
    this.precioTotal = {val:0};
    // console.log(this.listaCesta);
    for (let i = 0; i < this.listaCesta.length; i++) {
      this.precioTotal += this.listaCesta[i].precio;
    }
    // console.log(this.precioTotal);
    // return this.precioTotal
  }

}
