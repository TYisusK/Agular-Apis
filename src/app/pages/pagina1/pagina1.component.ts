import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  providers: [PostsService],
  imports: [],
  templateUrl: './pagina1.component.html',
  styleUrl: './pagina1.component.css'
})
export class Pagina1Component implements OnInit {

  // Propiedad para guardar los posts

  data:any[] = [];

  // Inyectamos el servicio en el constructor
  constructor(private postsService: PostsService) {}

  // Llamamos al servicio para obtener los posts

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((response: any) => {
      this.data = response.categories; // Extrae 'categories' correctamente
      console.log(this.data); // Verifica en la consola que se están obteniendo los datos
    });
  }
  




}
