
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Aos from 'aos';

declare var bootstrap: any;

@Component({
  selector: 'app-slider',
  standalone: false,

  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'

})
export class SliderComponent {
  @ViewChild('carouselDesktop', { static: false }) carouselDesktop!: ElementRef;
  @ViewChild('carouselMobile', { static: false }) carouselMobile!: ElementRef;

  carouselInstanceDesktop: any;
  carouselInstanceMobile: any;

  ngOnInit(): void {
    this.precargarSlider();
  }

  ngAfterViewInit(): void {
    this.iniciarCarousels();

    Aos.init({
      mirror: false, // no repetir en scroll inverso
      once: true
    });

    setTimeout(() => {
      Aos.refresh(); // refresca por si algo cargó después
    }, 1000);
  }

  //FUNCIONES

  iniciarCarousels(): void {
    setTimeout(() => {
      if (this.carouselDesktop) {
        this.carouselInstanceDesktop = new bootstrap.Carousel(this.carouselDesktop.nativeElement, {
          interval: 3000,
          ride: 'carousel'
        });
      }
      if (this.carouselMobile) {
        this.carouselInstanceMobile = new bootstrap.Carousel(this.carouselMobile.nativeElement, {
          interval: 3000,
          ride: 'carousel'
        });
      }
    }, 500);
  }

  precargarSlider(): void { //Carga las imagenes del slider mas rapidamente
    const rutasSlider = [
      'assets/slider/img1.png',
      'assets/slider/img2.png',
      'assets/slider/img3.png',
      'assets/slider/imgCel1.png',
      'assets/slider/imgCel2.png',
      'assets/slider/imgCel3.png'
    ];

    rutasSlider.forEach(ruta => {
      const img = new Image();
      img.src = ruta;
    });
  }

  //funciones para pantallas tactiles

  stopCarousel(): void {
    this.carouselInstanceMobile?.pause();
  }

  playCarousel(): void {
    this.carouselInstanceMobile?.cycle();
  }

  disableContextMenu(event: MouseEvent): void {
    event.preventDefault(); // solo evita clic derecho o long press
  }

}