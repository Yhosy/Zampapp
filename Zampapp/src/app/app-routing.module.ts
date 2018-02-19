import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 

import {AppComponent} from './app.component'
import {HomeComponent} from './home/home.component'
// import {ResultadoComponent} from './resultado/resultado.component'
// import {PreguntasComponent} from './preguntas/preguntas.component'



 
const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Resultado', component: HomeComponent },
  { path: 'Preguntas', component: HomeComponent },

  
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
