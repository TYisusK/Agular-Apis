import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Posts2Service {

  private apiUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast';

  constructor(private http: HttpClient) { }

  getMeals(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
