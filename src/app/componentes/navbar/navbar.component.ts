import { Component } from '@angular/core';
import Aos from 'aos';


@Component({
  selector: 'app-navbar',
  standalone: false,

  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor() { }

  ngAfterViewInit(): void {
    Aos.init({
      mirror: false // no repetir en scroll inverso
    });
  }

  //FUNCIONES
  scrollTo(anchor: string): void {
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }


}
