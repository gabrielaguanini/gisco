import { AfterViewInit, Component, OnInit } from '@angular/core';
import AOS from 'aos';  

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  showCards: boolean = false;  // variable para controlar la visibilidad de app-cards
  constructor() { }

  ngOnInit(): void {
    AOS.init({
      duration: 2000,  // Duración de la animación
      easing: 'ease-in-out',  // Efecto de aceleración
      once: true  // Ejecutar la animación solo una vez
    });

    this.delayShowCards(2500);
  }

   // FUNCIONES

  // Función para retrasar la aparición de app-cards
  delayShowCards(delayTime: number): void {
    setTimeout(() => {
      this.showCards = true;  
    }, delayTime);
  }

}
