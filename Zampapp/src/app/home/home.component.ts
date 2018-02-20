import { Component, OnInit, ViewChildren, ElementRef } from '@angular/core';
import { Categorias } from '../categorias';
import { BusquedaService } from '../busqueda.service'
import { QueryList } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChildren('transparent') elements : QueryList<ElementRef>; 
  filtrado = [];
  valores = {};
  constructor(private busquedaService: BusquedaService) { }

  ngOnInit() {

    this.Escribir('');

  }

  Escribir(texto) {
    this.filtrado = Categorias.filter((element, i) => {
      return element.value.indexOf(texto) >= 0;
    })
  }

  Hola(e) {
    let inputs = document.getElementsByClassName('transparent')
    for (var i = 0; i < inputs.length; i++) {
      this.busquedaService.Busqueda.categoria.push(JSON.stringify (inputs[i].attributes[4].value)) 
    }
    console.log(this.busquedaService.Busqueda);
  }


} 
