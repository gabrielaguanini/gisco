import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Aos from 'aos';

@Component({
  selector: 'app-loading',
  standalone: false,

  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent implements OnInit {
  isFadingOut = false;

  constructor(private router: Router) { }

  preloadImage: HTMLImageElement = new Image();
  backgroundLoaded = false;

  ngOnInit(): void {
    this.precargarFondos();
    this.navegarAHome();

  }

  ngAfterViewInit() {
    Aos.init({
      mirror: false, // no repetir en scroll inverso
      once: true
    });


    setTimeout(() => {
      Aos.refresh(); // refresca por si algo cargó después
    }, 1000);
  }

  //FUNCIONES

  navegarAHome(): void {
    setTimeout(() => {
      this.isFadingOut = true;

      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 1200); // Coincide con la animación de salida
    }, 5000);
  }

  
  precargarFondos(): void { // carga las img de los bg mas rapido
    const rutas = [
      '/assets/fondos/fondoCel.png',
      '/assets/fondos/fondoPress.png',
      '/assets/fondos/fondoPressMed.png',      
    ];
  
    rutas.forEach(ruta => {
      const img = new Image();
      img.src = ruta;
    });
  }

}

