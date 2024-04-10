import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";

@Injectable({providedIn: "root"})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 2),
    new Ingredient("Bananas", 4)
  ];
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  getIngredients() {
    return this.ingredients.slice();
  }
  addItemToList(item: Ingredient) {
    this.ingredients.push(item);
    this.ingredientsChanged.emit(this.ingredients.slice())
  }

  addItemsToList(items: Ingredient[]) {
    this.ingredients.push(...items);
    this.ingredientsChanged.emit(this.ingredients.slice())
  }

}
