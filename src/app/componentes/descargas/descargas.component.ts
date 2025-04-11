import { AfterViewInit, Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-descargas',
  standalone: false,
  
  templateUrl: './descargas.component.html',
  styleUrl: './descargas.component.css'
})
export class DescargasComponent implements AfterViewInit{

 ngAfterViewInit(): void {
    AOS.init({
      once: true, // para que se ejecute solo una vez
      duration: 3000, // duración en milisegundos (1000ms = 1s)
      easing: 'ease-in-out', // suavidad de la animación
    });
  }
}
