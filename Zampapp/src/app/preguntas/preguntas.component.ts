import { Component, OnInit } from '@angular/core';
import { BusquedaService } from '../busqueda.service';
import { Busqueda } from '../busqueda';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {
  url: string;
  inputs = [];
  names = ["cantidad", "temperatura", "picante", "preferencia"];
  name: string;
  constructor(
    private busquedaService: BusquedaService,
    private router: Router
  ) { }

  ngOnInit() {
  }
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
      alert("algo te falta por rellenar, aunque sea rellena todos los campos");
      return false;
    } else {
      return true;
    }
  };
  onSelect(cant, temp, pic, pref) {
    this.busquedaService.Busqueda = new Busqueda;
    this.inputs = [];
    this.inputs.push(cant.value, temp.value, pic.value, pref.value);
    if (!this.validaForm(this.inputs)) {
      this.busquedaService.Busqueda = new Busqueda;
      // break;
    } else {
      this.router.navigate(['Home']);
    }
    console.log("fin select");
    console.log(this.busquedaService.Busqueda);
  }
};

// this.busquedaService.Busqueda
