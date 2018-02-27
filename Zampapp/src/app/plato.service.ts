import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Plato } from './plato';
const urlApi = 'http://localhost:8080/';


@Injectable()

export class PlatoService {

	constructor(private http: Http,
		private httpClient: HttpClient) { }

	getPlatos() {
		return this.httpClient.get(urlApi + 'platos');
	}

	getPlato(id: string) {
		return this.httpClient.get(urlApi + 'platos/' + id);
	}
}