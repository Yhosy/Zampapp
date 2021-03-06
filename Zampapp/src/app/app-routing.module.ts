import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent}           from './app.component';
import {HomeComponent}          from './home/home.component';
import {ResultadosComponent}    from './resultados/resultados.component';
import {PreguntasComponent}     from './preguntas/preguntas.component';
import {PlatoDetailComponent}   from './plato-detail/plato-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Resultados', component: ResultadosComponent },
  { path: 'Preguntas', component: PreguntasComponent },
  { path: 'detail/:id', component: PlatoDetailComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
