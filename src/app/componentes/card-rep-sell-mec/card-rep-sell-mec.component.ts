import { Component } from '@angular/core';

@Component({
  selector: 'app-card-rep-sell-mec',
  standalone: false,

  templateUrl: './card-rep-sell-mec.component.html',
  styleUrl: './card-rep-sell-mec.component.css'
})
export class CardRepSellMecComponent {

  // Variable para controlar la visibilidad del contenedor
  mostrarImg: boolean = false;


  // Función para alternar el valor de mostrarContenedor
  abrirCerrarContenedor() {
    this.mostrarImg = !this.mostrarImg;
  }

}
