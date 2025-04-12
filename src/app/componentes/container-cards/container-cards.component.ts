import { Component } from '@angular/core';

@Component({
  selector: 'app-container-cards',
  standalone: false,
  
  templateUrl: './container-cards.component.html',
  styleUrl: './container-cards.component.css'
})
export class ContainerCardsComponent {
  // Creamos una propiedad que mantendrá el estado de visibilidad de cada imagen
  mostrarImagenes: boolean[] = [false, false, false, false]; // 4 imágenes (por ejemplo)

  // Función para abrir y cerrar contenedores
  abrirCerrarContenedor(id: number): void {
    // Cerramos todos los contenedores
    this.mostrarImagenes = [false, false, false, false];
    
    // Abrimos el contenedor correspondiente
    this.mostrarImagenes[id - 1] = true;
  }
}
