import { Component } from '@angular/core';

@Component({
  selector: 'app-cards-serv-alin',
  standalone: false,
  
  templateUrl: './cards-serv-alin.component.html',
  styleUrl: './cards-serv-alin.component.css'
})
export class CardsServAlinComponent {

    // Variable para controlar la visibilidad del contenedor
    mostrarImg: boolean = false;


    // Función para alternar el valor de mostrarContenedor
    abrirCerrarContenedor() {
      this.mostrarImg = !this.mostrarImg;
    }
  
  
  
  
}
