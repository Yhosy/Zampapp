import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NodeService } from "./node.service";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { ResultadosComponent } from './resultados/resultados.component';
import { BusquedaService } from './busqueda.service';
import { PlatosComponent } from './platos/platos.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { PlatoDetailComponent } from './plato-detail/plato-detail.component';
import { HttpModule } from '@angular/http';
import { HoverDirective } from './hover.directive';
import { HomeIzquierdaComponent } from './home-izquierda/home-izquierda.component';
import { HomeDerechaComponent } from './home-derecha/home-derecha.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ResultadosComponent,
    PlatosComponent,
    PreguntasComponent,
    PlatoDetailComponent,
    HoverDirective,
    HomeIzquierdaComponent,
    HomeDerechaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    BusquedaService,
    NodeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
