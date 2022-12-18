import { Component, Input, Output, EventEmitter } from "@angular/core";
import { RecipeService } from "../../recipe.service";
import { Recipe } from "../../recipes.model";
@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.css"],
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();
  constructor(private recipeService: RecipeService) {}
  onSelect() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
