import { Component, OnInit, Input} from '@angular/core';
import { Plato } from '../plato';


@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.css']
})
export class PlatosComponent implements OnInit {
	@Input() plato: Plato [];
	isMarcked = false;

	onClick() {
		this.isMarcked = true;
	}
  constructor() { }

  ngOnInit() {
  }

  agregar_Cesta(){
    console.log('llamado')
  }

}
