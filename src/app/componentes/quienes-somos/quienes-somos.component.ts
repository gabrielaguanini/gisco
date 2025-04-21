import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-quienes-somos',
  standalone: false,

  templateUrl: './quienes-somos.component.html',
  styleUrl: './quienes-somos.component.css'
})
export class QuienesSomosComponent {
  @ViewChild('quienesSomosContainer', { static: false }) quienesSomosContainer!: ElementRef;
  private scrollListener = this.activarAnimacionScroll.bind(this);

  ngAfterViewInit(): void {

    Aos.init({
      once: true // no repetir animacion
    });

    this.inicializarAnimacion();
    this.agregarListenerScroll();
  }

  ngOnDestroy(): void {
    this.removerListenerScroll();
  }

  //FUNCIONES 

  // Función que deja oculto al inicio
  private inicializarAnimacion(): void {
    if (this.quienesSomosContainer) {
      this.quienesSomosContainer.nativeElement.classList.add('oculto-scroll');
    }
  }

  // Agrega el evento scroll
  private agregarListenerScroll(): void {
    window.addEventListener('scroll', this.scrollListener);
  }

  // Quita el evento scroll
  private removerListenerScroll(): void {
    window.removeEventListener('scroll', this.scrollListener);
  }

  // Función que activa la animación
  private activarAnimacionScroll(): void {
    const el = this.quienesSomosContainer.nativeElement;
    const rect = el.getBoundingClientRect();

    if (rect.top <= window.innerHeight * 0.75) {
      el.classList.remove('oculto-scroll');
      el.classList.add('fade-in-up');
      this.removerListenerScroll(); // solo se dispara una vez
    }
  }

}