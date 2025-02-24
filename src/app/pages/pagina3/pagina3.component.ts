import { Component, OnInit } from '@angular/core';
import { Posts3Service } from '../../services/posts3.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagina3',
  standalone: true,
  templateUrl: './pagina3.component.html',
  styleUrl: './pagina3.component.css',
  providers: [Posts3Service],
  imports: [CommonModule]
})
export class Pagina3Component implements OnInit {

  meal: any = null; // Guardará el platillo aleatorio

  constructor(private posts3Service: Posts3Service) {}

  ngOnInit(): void {
    this.getMeal();
  }

  getMeal(): void {
    this.posts3Service.getRandomMeal().subscribe((response: any) => {
      console.log('📌 Respuesta de la API:', response);
      if (response && response.meals) {
        this.meal = response.meals[0]; // Guardamos el primer resultado
        console.log('✅ Platillo guardado:', this.meal);
      } else {
        console.error('⚠️ No se encontró un platillo en la API.');
      }
    }, error => {
      console.error('❌ Error al obtener el platillo:', error);
    });
  }
}
