import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoadingComponent } from './componentes/loading/loading.component';
import { CapacitacionesComponent } from './componentes/capacitaciones/capacitaciones.component';
import { DescargasComponent } from './componentes/descargas/descargas.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { RutaProtegidaGuard } from './servicios/ruta-protegida.guard';


const routes: Routes = [
  { path: '', component: LoadingComponent}, 
  { path: 'home', component: HomeComponent},
  { path: 'capacitaciones', component: CapacitacionesComponent, canActivate: [RutaProtegidaGuard]},
  { path: 'descargas', component: DescargasComponent, canActivate: [RutaProtegidaGuard]},
  { path: 'contacto', component: ContactoComponent, canActivate: [RutaProtegidaGuard]}
];

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',      // ✔ habilita scroll al fragmento
  scrollPositionRestoration: 'enabled', // opcional: vuelve al scroll anterior
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
