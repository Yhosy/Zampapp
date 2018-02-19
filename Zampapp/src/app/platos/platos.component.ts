import { Component, OnInit } from '@angular/core';

import { Plato } from '../plato';

@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.css']
})
export class PlatosComponent implements OnInit {
platos: Plato[];
  constructor() { }

  ngOnInit() {
  }

}
