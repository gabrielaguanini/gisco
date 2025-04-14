
import {  Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-slider',
  standalone: false,
  
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
  
})
export class SliderComponent{
  ngAfterViewInit(): void {
    setTimeout(() => {
      const carousels = document.querySelectorAll('.carousel');
      carousels.forEach((carouselEl) => {
        new bootstrap.Carousel(carouselEl, {
          interval: 3000,
          ride: 'carousel'
        });
      });
    });
  }
}