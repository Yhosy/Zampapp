import { Component,OnInit } from '@angular/core';
import { PlatoService } from './plato.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PlatoService]
})
export class AppComponent implements OnInit {

  homedx;

  ngOnInit(){
	  this.homedx=false;
	}
  
  hola() {
    console.log('hola');
    this.homedx=true;
  }

  adios(){
    console.log('adios');
    
    this.homedx=false;
  }

  title = 'Zampapp';
}
