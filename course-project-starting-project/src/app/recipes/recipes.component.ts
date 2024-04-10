import {Component, OnInit} from '@angular/core';
import {Recipe} from "./recipe.model";
import {RecipesService} from "./recipes.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  providers: [RecipesService]
})
export class RecipesComponent {
  selectedRecipe: Recipe;

  constructor(private recipesService: RecipesService) {
  }

  // ngOnInit() {
  //   this.recipesService.recipesSelected
  //     .subscribe(
  //       (recipe: Recipe) => {
  //         this.selectedRecipe = recipe;
  //       }
  //     )
  // }
}
