import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plato } from './plato';
import { Categoria } from './categoria';
const urlApi = 'http://localhost:8080/';

@Injectable()
export class NodeService {

  constructor(private http: HttpClient) { }

  getPlatos() {
    return this.http.get(urlApi + 'platos');
  }

  getCategorias() {
    return this.http.get(urlApi + 'categorias');
  }

  // createPlato(plato: Plato) {
  //   return this.http.post(urlApi + 'platos', plato);
  // }
}
