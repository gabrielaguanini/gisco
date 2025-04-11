import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoadingComponent } from './componentes/loading/loading.component';
import { CapacitacionesComponent } from './componentes/capacitaciones/capacitaciones.component';
import { DescargasComponent } from './componentes/descargas/descargas.component';

const routes: Routes = [
  { path: '', component: LoadingComponent }, 
  { path: 'home', component: HomeComponent },
  { path: 'capacitaciones', component: CapacitacionesComponent },
  { path: 'descargas', component: DescargasComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
