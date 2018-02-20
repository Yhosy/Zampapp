import { Component, OnInit, ViewChildren, ElementRef } from '@angular/core';
import { Categorias } from '../categorias';
import { BusquedaService } from '../busqueda.service'
import { QueryList } from '@angular/core';
import { Busqueda } from '../busqueda';

@Component({
  selector: 'app-home-derecha',
  templateUrl: './home-derecha.component.html',
  styleUrls: ['./home-derecha.component.css']
})
export class HomeDerechaComponent implements OnInit {
  @ViewChildren('input') elements: QueryList<ElementRef>;
  filtrado = [];
  constructor(private busquedaService: BusquedaService) { }

  ngOnInit() {

    this.Escribir('');

  }

  Escribir(texto) {
    this.filtrado = Categorias.filter((element, i) => {
      return element.value.indexOf(texto) >= 0 ;
    })
  }

  Hola(e) {
    this.busquedaService.Busqueda = new Busqueda;
    this.elements.forEach(x => {
      if (x.nativeElement.checked == true) {
        this.busquedaService.Busqueda.categoria.push(x.nativeElement.attributes.value.value);
      }
    });
    console.log(this.busquedaService.Busqueda);
  }

}
