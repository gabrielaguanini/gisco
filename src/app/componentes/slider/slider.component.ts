
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

  //para pantallas tactiles

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