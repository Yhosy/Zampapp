import {Http} from '@angular/http';
import { Injectable } from '@angular/core';
import  'rxjs/add/operator/map';


@Injectable()

export class PlatoService {

	constructor(private http:Http){}

	getPlatos(){
		return this.http.get ( 'http://www.mocky.io/v2/5a82c5ad2f0000580074bb66')
			.map(response => response.json())			
	}

	getPlato(id: number) {
		return this.http.get ( 'http://www.mocky.io/v2/5a82c5ad2f0000580074bb66')
			.map(response => response.json()
			.filter(plato => plato.id ===id))	
	}
}