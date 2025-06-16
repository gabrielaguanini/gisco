import { Injectable } from '@angular/core';
import { CanActivate, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RutaProtegidaGuard implements CanActivate {

 private lastNavigationInternal = false;

  constructor(private router: Router) {
    // Escuchar eventos de navegación para detectar si la última navegación fue interna
    this.router.events.pipe(
      filter((event): event is NavigationStart => event instanceof NavigationStart)
    ).subscribe((event: NavigationStart) => {
      // Si navigationTrigger es 'imperative', es navegación interna (clic)
      this.lastNavigationInternal = event.navigationTrigger === 'imperative';
    });
  }

  canActivate(): boolean {
    // Permitimos acceso libre a '' y 'home'
    const allowedRoutes = ['', '/home'];
    const currentUrl = this.router.url;

    if (allowedRoutes.includes(currentUrl)) {
      return true;
    }

    // Si la última navegación fue interna, dejamos pasar
    if (this.lastNavigationInternal) {
      return true;
    }

    // Si no, redirigimos a /home
    this.router.navigate(['/home']);
    return false;
  }
}