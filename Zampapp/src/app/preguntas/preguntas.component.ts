import { Component, OnInit }  from '@angular/core';
import { BusquedaService }    from '../busqueda.service';
import { Busqueda }           from '../busqueda';
import { Router }             from '@angular/router';
import { ListacestaService }  from '../listacesta.service';
import { NodeService }        from '../node.service';
import { timeout }            from 'q';
import { $ }                  from 'protractor';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {
  _platos: any;
  url: string;
  inputs = [];
  names = ["cantidad", "temperatura", "picante", "preferencia"];
  name: string;
  popupdx;
  constructor(
    private busquedaService: BusquedaService,
    private router: Router,
    private listaService: ListacestaService
  ) {this.listaService.onEsconderCesta.emit(true); }

  ngOnInit() {
  }

  // Pop-up si los inputs no estan llenos
  estadoPopup(e) {
    this.popupdx = e;
    window.setTimeout(() => {
      e = false;
      this.popupdx = e;
    }, 6000);
  }

  // comprueba que los inputs estén correctos
  validaForm(arrInputs) {
    var contador = 0;
    for (let i = 0; i < arrInputs.length; i++) {
      this.name = this.names[i];
      for (const key in arrInputs[i]) {
        if (arrInputs[i][key]) {
          this.busquedaService.Busqueda[this.name].push(key);
          contador++;
        };
      };
    };
    if (contador == 0) {
      this.estadoPopup(event);
      return false;
    } else {
      return true;
    }
  };

  // Crea el objeto busqueda y lo rellena 
  onSelect(cant, temp, pic, pref) {
    this.busquedaService.Busqueda = new Busqueda;
    this.inputs = [];
    this.inputs.push(cant.value, temp.value, pic.value, pref.value);
    if (!this.validaForm(this.inputs)) {
      this.busquedaService.Busqueda = new Busqueda;
    } else {
      this.router.navigate(['Resultados']);
    }
  }
};