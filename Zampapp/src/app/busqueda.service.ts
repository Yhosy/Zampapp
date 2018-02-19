import { Injectable } from '@angular/core';
import {Busqueda} from './busqueda'

@Injectable()
export class BusquedaService {
  Busqueda =new Busqueda;

  constructor() { 

  }

  public static CogerFiltrador(): void {
    let Busuqeda= new Busqueda();
    // return Busqueda;
  }

}
