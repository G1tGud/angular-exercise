import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";

@Injectable()
export class RecipesService {
  private recipes: Recipe[] = [
    new Recipe( "Palačinke", "Fine", "https://images.24ur.com/media/images/953x459/Jul2011/60710403.jpg?v=1d83", [
      new Ingredient("Moka", 100),
      new Ingredient("Jajca", 2),
    ]),
    new Recipe( "Palačinke 2", "Slabe", "https://images.24ur.com/media/images/953x459/Jul2011/60710403.jpg?v=1d83", [
      new Ingredient("Sol", 22),
      new Ingredient("Sladkor", 1),
    ])
  ];
  // recipesSelected = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeByIndex(index: number) {
    return this.recipes[index];
  }

}
