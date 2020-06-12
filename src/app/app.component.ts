import { Component, OnInit } from '@angular/core';
import { RecipeList } from './models/recipeList.model';
import { Results } from './models/results.model';
import { ApiService } from './services/api.service';
import { DBConfig } from 'ngx-indexed-db';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'recipes';
  ngOnInit() {}
}
