import { AfterViewInit, Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-slider',
  standalone: false,
  
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent{
  showModal: boolean = false; // Controla la visibilidad del modal
  
// Función para abrir el modal
openModal() {
  this.showModal = true;
}

// Función para cerrar el modal
closeModal() {
  this.showModal = false;
}
}
