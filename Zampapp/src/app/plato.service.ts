import { Http } 								from '@angular/http';
import { Injectable } 							from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } 	from '@angular/common/http';
import { Plato } 								from './plato';
import 'rxjs/add/operator/map';
const urlApi = 'http://localhost:8080/';


@Injectable()

export class PlatoService {

	constructor(private http: Http,
		private httpClient: HttpClient) { }

	getPlatos(x) {
		let params = new HttpParams();

       params = params.set('categoria', x.categoria);
       params = params.set('cantidad', x.cantidad);
       params = params.set('preferencia', x.preferencia);
       params = params.set('pic', x.pic);
       params = params.set('temp', x.temp);

       return this.httpClient.get(urlApi  + 'platos/', { params });
	}

	getPlato(id: string) {
		return this.httpClient.get(urlApi + 'platos/' + id);
	}
}
