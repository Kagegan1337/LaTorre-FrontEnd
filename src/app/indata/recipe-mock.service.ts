import { Injectable } from '@angular/core';
import {Recipe} from "../model/recipe";
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecipeMockService {

  constructor() { }

    recipe: Recipe[] = [
        {
            name: "Bacalhau à brás",
            category: "pasta",
            recommendation:"",
            level:4.5,
            shortDescription:"yummi"
        },
        {
            name: "Bacalhau à brás",
            category: "pasta",
            recommendation:"",
            level:4.5,
            shortDescription:"yummi"
        },
        {
            name: "Bacalhau à brás",
            category: "pasta",
            recommendation:"",
            level:4.5,
            shortDescription:"yummi"
        },
        {
            name: "Bacalhau à brás",
            category: "pasta",
            recommendation:"",
            level:4.5,
            shortDescription:"yummi"
        },
    ]

    loadRecipeOverview() {
      return of(this.recipe);
    }
}
