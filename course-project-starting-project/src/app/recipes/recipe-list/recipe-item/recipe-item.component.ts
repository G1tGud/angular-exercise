import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Recipe} from "../../recipe.model";
import {RecipesService} from "../../recipes.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Input() index: number;

  // constructor(private recipesService: RecipesService) {
  // }

  // selectRecipe() {
  //   this.recipesService.recipesSelected.emit(this.recipe);
  // }
}
