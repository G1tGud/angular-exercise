import {Component, ElementRef, EventEmitter, Output, ViewChild} from "@angular/core";
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";


@Component({
  selector: "app-shopping-list-editor",
  templateUrl: "shopping-list-editor.component.html"
})
export class ShoppingListEditorComponent {
  @ViewChild("nameInput") nameInput: ElementRef;
  @ViewChild("amountInput", {static: true}) amountInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {
  }


  addShoppingItem() {
    this.shoppingListService.addItemToList(new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value));
  }
}
