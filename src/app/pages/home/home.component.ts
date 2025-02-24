import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // Inyectamos el Router para navegar entre páginas
  constructor(private router: Router) {}

  // Método para manejar la navegación
  goTo(route: string): void {
    this.router.navigate([route]);
  }
}
