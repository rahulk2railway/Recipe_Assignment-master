import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-recipesteps',
  templateUrl: './recipesteps.component.html',
  styleUrls: ['./recipesteps.component.css'],
})
export class RecipestepsComponent implements OnInit {
  public lstRecipe: any;
  public id: any;
  defaultImage = 'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif';
  constructor(
    private activatedRoute: ActivatedRoute,
    private dbService: DatabaseService
  ) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.fetchRecipeStepsData();
  }
  async fetchRecipeStepsData() {
    //feaching the data from index db
    this.lstRecipe = await this.dbService.getrecipeData().toPromise();
    console.log('recipesteps object', this.lstRecipe);
  }
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
