import { AfterViewInit, Component, OnInit } from '@angular/core';
import AOS from 'aos';  

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init({
      duration: 2000,  // Duración de la animación
      easing: 'ease-in-out',  // Efecto de aceleración
      once: true  // Ejecutar la animación solo una vez
    });

  
  }



}
