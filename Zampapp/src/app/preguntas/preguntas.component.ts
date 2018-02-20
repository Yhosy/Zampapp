import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {
  inputs = [];
  constructor() { }

  ngOnInit() {
  }
  prueba(v) {
    this.inputs = [];
    this.inputs.push(v.value);
    console.log(this.inputs);
    console.log("vamos");
  }
  validaForm(){
    // qye algun campo este marcado
  }
}
