import { Component, OnInit } from '@angular/core';
import AOS from 'aos';  

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   // Pequeño timeout para que AOS se inicialice después de que la vista se haya cargado
   setTimeout(() => {
    AOS.init({
      once: true, 
    });
  }, 200); // también podés probar 200 o 300 si hace falta
    
  }

}
