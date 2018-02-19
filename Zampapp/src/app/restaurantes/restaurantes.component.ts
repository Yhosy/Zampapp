import { Component, OnInit } from '@angular/core';

import { Restaurante } from '../restaurante';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {
  restaurantes: Restaurante [];
  constructor() { }

  ngOnInit() {
  }

}
