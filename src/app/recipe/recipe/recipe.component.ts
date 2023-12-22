import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RecipeHeaderComponent} from "../header/recipe-header.component";
import {Recipe} from "../../model/recipe";

@Component({
  selector: 'app-recipe',
  standalone: true,
    imports: [
        RecipeHeaderComponent
    ],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss'
})
export class RecipeComponent {
    @Input() recipe : Recipe = {} as Recipe;
    @Output() showDetails = new EventEmitter<void>();

}
