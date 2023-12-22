import { Component } from '@angular/core';
import {RecipeService} from "../../service/recipe.service";
import {Recipe} from "../../model/recipe";
import {ArticleComponent} from "../../components/aritcle/article.component";
import {NgForOf} from "@angular/common";
import {RecipeComponent} from "../recipe/recipe.component";

@Component({
  selector: 'app-recipe-overview',
  standalone: true,
    imports: [
        ArticleComponent,
        NgForOf,
        RecipeComponent
    ],
  templateUrl: './recipe-overview.component.html',
  styleUrl: './recipe-overview.component.scss'
})
export class RecipeOverviewComponent {
    protected recipes: Recipe[] = [];

    constructor(private receiptService: RecipeService) {
    }

    ngOnInit() {
        this.receiptService.getRecipeOverview().subscribe({
            next: value => {
                this.recipes = value;
            },
            error: err =>  {
                console.log(err);
            }
        })
    }

    showRecipeDetails(recipe: Recipe) {

    }
}
