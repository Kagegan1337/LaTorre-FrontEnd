import { Injectable } from '@angular/core';
import {RecipeMockService} from "../indata/recipe-mock.service";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private recipeMock: RecipeMockService) { }


    public getRecipeOverview() {
      return this.recipeMock.loadRecipeOverview();
    }
}
