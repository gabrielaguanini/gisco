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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SliderComponent,
    CardsComponent,
    FooterComponent,
    VideosComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
