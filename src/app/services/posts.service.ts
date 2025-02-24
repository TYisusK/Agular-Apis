import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private htpp:HttpClient) { }
  //funcion que hace petición get a la api

  getPosts(){
    return this.htpp.get('https://www.themealdb.com/api/json/v1/1/categories.php');
  }
}
