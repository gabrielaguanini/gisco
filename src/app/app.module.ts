import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { SliderComponent } from './componentes/slider/slider.component';
import { CardsComponent } from './componentes/cards/cards.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { VideosComponent } from './componentes/videos/videos.component';
import { LoadingComponent } from './componentes/loading/loading.component';
import { CardsSellosComponent } from './componentes/cards-sellos/cards-sellos.component';
import { CardRepSellMecComponent } from './componentes/card-rep-sell-mec/card-rep-sell-mec.component';
import { CardsServAlinComponent } from './componentes/cards-serv-alin/cards-serv-alin.component';
import { QuienesSomosComponent } from './componentes/quienes-somos/quienes-somos.component';
import { CapacitacionesComponent } from './componentes/capacitaciones/capacitaciones.component';
import { DescargasComponent } from './componentes/descargas/descargas.component';
import { ContainerCardsComponent } from './componentes/container-cards/container-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SliderComponent,
    CardsComponent,
    FooterComponent,
    VideosComponent,
    LoadingComponent,
    CardsSellosComponent,
    CardRepSellMecComponent,
    CardsServAlinComponent,
    QuienesSomosComponent,
    CapacitacionesComponent,
    DescargasComponent,
    ContainerCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
