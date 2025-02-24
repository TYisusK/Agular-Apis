import { Component, OnInit } from '@angular/core';
import { Posts2Service } from '../../services/posts2.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagina2',
  standalone: true,
  templateUrl: './pagina2.component.html',
  styleUrl: './pagina2.component.css',
  providers: [Posts2Service],
  imports: [CommonModule]
})
export class Pagina2Component implements OnInit {

  meals: any[] = []; // Ahora almacenamos comidas

  constructor(private posts2Service: Posts2Service) {}

  ngOnInit(): void {
    this.posts2Service.getMeals().subscribe((response: any) => {
      console.log('📌 Respuesta de la API:', response);
      if (response && response.meals) {
        this.meals = response.meals;
        console.log('✅ Comidas guardadas en meals:', this.meals);
      } else {
        console.error('⚠️ No se encontraron comidas en la API.');
      }
    }, error => {
      console.error('❌ Error al obtener las comidas:', error);
    });
  }
}
