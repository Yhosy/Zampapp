import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { ResultadosComponent } from './resultados/resultados.component';
<<<<<<< HEAD
import { PlatosComponent } from './platos/platos.component';
import  { FormsModule, ReactiveFormsModule  } from '@angular/forms';

=======
import { PreguntasComponent } from './preguntas/preguntas.component';
>>>>>>> 7235fe84464f859e1ca66c33d747e8407f006786

import {PlatoDetailComponent} from './plato-detail/plato-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ResultadosComponent,
<<<<<<< HEAD
    PlatosComponent
=======
    PreguntasComponent,
    PlatoDetailComponent
>>>>>>> 7235fe84464f859e1ca66c33d747e8407f006786
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
