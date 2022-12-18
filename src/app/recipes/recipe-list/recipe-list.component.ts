import { Component, OnInit } from "@angular/core";
import { RecipeService } from "../recipe.service";
import { Recipe } from "../recipes.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  // recipeservice from provider recipes component
  constructor(private recipeService: RecipeService) {}
  ngOnInit(): void {
    // get recipes from recipe service
    this.recipes = this.recipeService.getRecipes();
  }
}
