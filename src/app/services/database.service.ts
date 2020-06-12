import { Injectable, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService implements OnInit {
  constructor(private apiService: ApiService, private storage: LocalStorage) {}
  ngOnInit(): void {}
  fetchData(): Observable<any> {
    return this.apiService.getRecipes();
  }
  getrecipeData(): Observable<any> {
    return this.storage.getItem('recipeindex');
  }
}
