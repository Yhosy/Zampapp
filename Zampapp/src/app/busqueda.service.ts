import { Injectable } from '@angular/core';
import {Busqueda} from './busqueda'

@Injectable()
export class BusquedaService {
  Busqueda =new Busqueda;

  constructor() { 

  }

  public CogerFiltrador(): Busqueda {
    
    return this.Busqueda;
  }

}
