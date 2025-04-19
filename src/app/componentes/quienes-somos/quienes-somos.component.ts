import { Component } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-quienes-somos',
  standalone: false,
  
  templateUrl: './quienes-somos.component.html',
  styleUrl: './quienes-somos.component.css'
})
export class QuienesSomosComponent {

  ngAfterViewInit(): void {
    Aos.init({
      mirror: false, // no repetir en scroll inverso
      once: true
    });
  }
}
