import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { NodeService }          from "./node.service";
import { ListacestaService }    from "./listacesta.service";
import { AppComponent }         from './app.component';
import { HeaderComponent }      from './header/header.component';
import { FooterComponent }      from './footer/footer.component';
import { HomeComponent }        from './home/home.component';
import { AppRoutingModule }     from './/app-routing.module';
import { ResultadosComponent }  from './resultados/resultados.component';
import { BusquedaService }      from './busqueda.service';
import { PlatosComponent }      from './platos/platos.component';
import { PreguntasComponent }   from './preguntas/preguntas.component';
import { PlatoDetailComponent } from './plato-detail/plato-detail.component';
import { HttpModule }           from '@angular/http';
import { CestaComponent }       from './cesta/cesta.component';
import { HttpClientModule }     from '@angular/common/http';
import { PopupComponent }       from './popup/popup.component';

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
    CestaComponent,
    PopupComponent
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
    NodeService,
    ListacestaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
