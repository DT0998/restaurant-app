import { Component, Input } from "@angular/core";
import { RecipeService } from "../recipe.service";
import { Recipe } from "../recipes.model";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"],
})
export class RecipeDetailComponent {
  @Input() recipe: Recipe;
  constructor(private RecipeService: RecipeService) {}
  onAddToShoppingList() {
    this.RecipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
