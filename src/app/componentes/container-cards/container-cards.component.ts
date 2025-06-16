import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-container-cards',
  standalone: false,

  templateUrl: './container-cards.component.html',
  styleUrl: './container-cards.component.css'
})
export class ContainerCardsComponent {

  cardOpCl1: boolean = false;
  cardOpCl2: boolean = false;
  cardOpCl3: boolean = false;
  cardOpCl4: boolean = false;

  // Accede al div button-grid con el id 'idButton-grid'
  @ViewChild('buttonGrid') buttonGrid!: ElementRef;

  // Variable para alternar el tamaño del div button-grid con el id 'idButton-grid'
  isResized = false;

  // Funcion para abrir o cerrar cards
  openCloseCards(number: number): void {
    const propName = `cardOpCl${number}` as keyof this;

    // cierra todas las cards antes de abrir la cards seleccionada
    this.cardOpCl1 = false;
    this.cardOpCl2 = false;
    this.cardOpCl3 = false;
    this.cardOpCl4 = false;
    // abre y cierra la card seleccionada
    this[propName] = !(this[propName] as boolean) as any;

  }

  // Funcion para cerrar cards
  closeCard(number: number): void {
    const propName = `cardOpCl${number}` as keyof this;
    (this[propName] as boolean) = false;

  }

  // Cambia el tamaño usando scale con transform
  reducirTaman(): void {this.buttonGrid.nativeElement.style.transform = 'scale(0.7)'; 
  }

  // Restaurar al tamaño original con transform: scale(1)
  volverTamOriginal(): void {
    this.buttonGrid.nativeElement.style.transform = 'scale(1)';
    this.isResized = false; // Asegura que el estado se restablezca a original
    console.log('Tamaño restaurado al original');
  }

  // ancla
  scrollTo(anchor: string): void {
    setTimeout(() => {
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100); // espera 100ms para que se renderice
  }
  
}


