import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  standalone: false,

  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent implements OnInit {

  isFadingOut = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.isFadingOut = true;

      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 1200); // Coincide con la animación de salida
    }, 5000);
  }
}