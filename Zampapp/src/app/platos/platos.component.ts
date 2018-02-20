import { Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.css']
})
export class PlatosComponent implements OnInit {
	@Input() plato;
	isMarcked = false;

	onClick() {
		this.isMarcked = true;
	}
  constructor() { }

  ngOnInit() {
  }

}
