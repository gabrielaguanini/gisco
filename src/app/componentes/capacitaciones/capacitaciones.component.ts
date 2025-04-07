import { AfterViewInit, Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-capacitaciones',
  standalone: false,
  
  templateUrl: './capacitaciones.component.html',
  styleUrl: './capacitaciones.component.css'
})
export class CapacitacionesComponent implements AfterViewInit{

  ngAfterViewInit(): void {
    AOS.init({
      once: true, // para que se ejecute solo una vez
      duration: 3000, // duración en milisegundos (1000ms = 1s)
      easing: 'ease-in-out', // suavidad de la animación
    });
  }
}
