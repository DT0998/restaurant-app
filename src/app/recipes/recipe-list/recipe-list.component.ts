import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Recipe } from "../recipes.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "This is simply a test",
      "https://i.pinimg.com/564x/8d/c5/31/8dc531fd1168a51c9e5bc9aca0d45051.jpg"
    ),
    new Recipe(
      "Another Test Recipe",
      "This is simply a test",
      "https://i.pinimg.com/564x/8d/c5/31/8dc531fd1168a51c9e5bc9aca0d45051.jpg"
    ),
  ];
  constructor() {}
  ngOnInit(): void {}
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
