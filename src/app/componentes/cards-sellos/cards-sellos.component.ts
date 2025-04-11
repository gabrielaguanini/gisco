import { Component } from '@angular/core';

@Component({
  selector: 'app-cards-sellos',
  standalone: false,

  templateUrl: './cards-sellos.component.html',
  styleUrl: './cards-sellos.component.css'
})
export class CardsSellosComponent {

  // Variable para controlar la visibilidad del contenedor
  mostrarImg: boolean = false;


  // Función para alternar el valor de mostrarContenedor
  abrirCerrarContenedor() {
    this.mostrarImg = !this.mostrarImg;
  }



}
