import {Component, Input} from '@angular/core';
import {Recipe} from "../../model/recipe";
import {DividerModule} from "primeng/divider";

@Component({
  selector: 'app-recipe-header',
  standalone: true,
    imports: [
        DividerModule
    ],
  templateUrl: './recipe-header.component.html',
  styleUrl: './recipe-header.component.scss'
})
export class RecipeHeaderComponent {

    @Input() recipe: Recipe = {} as Recipe;

    name() {
        return this.checkDto(this.recipe) ? this.recipe.name : "";
    }

    level() {
        return this.checkDto(this.recipe) ? this.recipe.level : 0;
    }

    private checkDto(object: any) {
        return object !== undefined && object !== null;
    }
}
