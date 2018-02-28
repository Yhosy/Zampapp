import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ListacestaService {
  listaCesta = [];
  onEsconderCesta:EventEmitter<boolean>;

  constructor() { 
    this.onEsconderCesta=new EventEmitter();
  }

  agragaPlato(obj) {
    console.log("service");
    this.listaCesta.push(obj);
    console.log(this.listaCesta);
  }

  leerLista() {
    return this.listaCesta
  }

  eliminaPlato() { }

}
