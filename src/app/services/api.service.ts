import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecipeList } from '../models/recipeList.model';

let headers: HttpHeaders = new HttpHeaders();
headers = headers.append('x-rapidapi-host', 'tasty.p.rapidapi.com');
headers = headers.append(
  'x-rapidapi-key',
  'b79680d22emshbb44a5955819bfbp11ff81jsnc6a896a25df6'
);
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseURL: string =
    'https://tasty.p.rapidapi.com/recipes/list?tags=under_30_minutes&from=0&sizes=20';
  constructor(private httpClient: HttpClient) {}
  getRecipes(): Observable<HttpResponse<RecipeList[]>> {
    return this.httpClient.get<RecipeList[]>(this.baseURL, {
      observe: 'response',
      headers,
    });
  }
}
