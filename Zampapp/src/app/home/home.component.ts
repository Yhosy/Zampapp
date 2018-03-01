import { Component, OnInit, ViewChildren, ElementRef } from '@angular/core';
import { Categorias }                                  from '../Categorias';
import { BusquedaService }                             from '../busqueda.service'
import { QueryList }                                   from '@angular/core';
import { Busqueda }                                    from '../busqueda';
import { ListacestaService }                           from '../listacesta.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChildren('input') elements: QueryList<ElementRef>;
  filtrado = [];
  constructor(private busquedaService: BusquedaService,
    private listaService: ListacestaService) { this.listaService.onEsconderCesta.emit(true); }

  ngOnInit() {
    this.Escribir('');
  }

  // Carga de categorias
  Escribir(texto) {
    this.filtrado = Categorias.filter((element, i) => {
      return element.value.indexOf(texto) >= 0;
    })
  }

  // Crear objeto busqueda
  Hola(e) {
    this.busquedaService.Busqueda = new Busqueda;
    this.elements.forEach(x => {
      if (x.nativeElement.checked == true) {
        this.busquedaService.Busqueda.categoria.push(x.nativeElement.attributes.value.value);
      }
    });
  }
} 
