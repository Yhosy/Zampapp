import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ResultadosComponent} from './resultados/resultados.component';
import {PlatoDetailComponent} from './plato-detail/plato-detail.component';
// import {PreguntasComponent} from './preguntas/preguntas.component'



 
const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Resultados', component: ResultadosComponent },
  { path: 'Preguntas', component: HomeComponent },
<<<<<<< HEAD
  { path: 'pagplato', component: PlatoDetailComponent }

  
=======
>>>>>>> 75e1ea978e7dc3d702426e7f58117b7aa306384c
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
