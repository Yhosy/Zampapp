import { Component, OnInit } from '@angular/core';
import { ListacestaService } from '../listacesta.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cestadx;
  constructor(private listaService: ListacestaService) {
    this.listaService.onEsconderCesta.subscribe(x => this.cestadx = null);
  }

  ngOnInit() {
  }

  estadoCesta(event) {
    this.cestadx = event;
  }



}
