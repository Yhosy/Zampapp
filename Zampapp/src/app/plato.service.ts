import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Plato } from './plato';
const urlApi = 'http://localhost:8080/';


@Injectable()

export class PlatoService {

	constructor(private http: Http,
		private httpClient: HttpClient) { }

	getPlatos(x) {
		console.log("x", x)
		let params = new HttpParams();
		console.log("params", params)

       params = params.append('categoria', x.categoria);
       params = params.append('cantidad', x.cantidad);
       params = params.append('preferencia', x.preferencia);
       params = params.append('pic', x.pic);
       params = params.append('temp', x.temp);
       console.log("params", params);

       return this.httpClient.get(urlApi  + 'platos/', { params });
	}

	getPlato(id: string) {
		return this.httpClient.get(urlApi + 'platos/' + id);
	}
}
