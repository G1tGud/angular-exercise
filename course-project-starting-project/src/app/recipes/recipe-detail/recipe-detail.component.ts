import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipesService} from "../recipes.service";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  index: number;

  constructor(private recipeService: RecipesService, private shoppingListService: ShoppingListService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.index = +this.route.snapshot.params['id'];
    this.recipe = this.recipeService.getRecipeByIndex(this.index);

    this.route.params.subscribe(params => {
      this.index = +params['id'];
      this.recipe = this.recipeService.getRecipeByIndex(this.index);
    })
  }

  onAddItemsToShoppingList() {
    this.shoppingListService.addItemsToList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(["edit"], {relativeTo: this.route});
  }
}
