import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Results } from '../models/results.model';
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
  public recipeItems: Array<Results> = [];
  public recipes: Results[] = [];
  public recipeResults: any;
  public lstRecipe: any;
  public searchRecipe;
  public selectedCookingType: string = '';
  public defaultImage =
    'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif';

  constructor(
    public routers: Router,
    private dbService: DatabaseService,
    public storage: LocalStorage
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {
    await this.fetchData().then((localData) => {
      if (!localData) {
        this.dbService.fetchData().subscribe((resp) => {
          console.log('calling api', resp);
          this.recipeResults = resp.body['results'];
          this.storage
            .setItem('recipeindex', this.recipeResults)
            .subscribe((data) => {
              this.fetchData();
            });
        });
      }
    });
  }
  async fetchData() {
    this.recipes = await this.dbService.getrecipeData().toPromise();
    this.recipes.forEach((recipe) => {
      if (recipe.id != 1495) {
        if (recipe.id != 1486) {
          if (recipe.id != 1438) {
            this.recipeItems.push(recipe);
          }
        }
      }
    });
    console.log('filter recipe list', this.recipes);
    if (this.selectedCookingType != null) {
      if (this.selectedCookingType == 'easy') {
        this.lstRecipe = this.recipeItems.filter(
          (i) => i.total_time_minutes <= 10
        );
      } else if (this.selectedCookingType == 'medium') {
        this.lstRecipe = this.recipeItems.filter(
          (i) => i.total_time_minutes > 10 && i.total_time_minutes <= 25
        );
      } else if (this.selectedCookingType == 'complex') {
        this.lstRecipe = this.recipeItems.filter(
          (i) => i.total_time_minutes > 25
        );
      } else {
        this.lstRecipe = this.recipeItems;
      }
    }

    return this.recipeItems;
  }
  selectChangeHandler(event: any) {
    this.selectedCookingType = event.target.value;
    this.fetchData();
    console.log('selectedCookingType', this.selectedCookingType);
  }
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
