import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: false,

  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

  // Variable para controlar la visibilidad del contenedor
  mostrarImg: boolean = false;


  // Función para alternar el valor de mostrarContenedor
  abrirCerrarContenedor() {
    this.mostrarImg = !this.mostrarImg;
  }


}
