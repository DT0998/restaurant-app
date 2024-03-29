import { Component } from "@angular/core";
import { RecipeService } from "../recipe.service";
import { Recipe } from "../recipes.model";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"],
})
export class RecipeDetailComponent {
  recipe: Recipe;
  id: number;
  constructor(
    private RecipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.recipe = this.RecipeService.getRecipe(this.id);
    });
  }
  onAddToShoppingList() {
    this.RecipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
  onEditRecipe() {
    this.router.navigate(["edit"], { relativeTo: this.route });
  }
  onDeleteRecipe() {
    this.RecipeService.deleteRecipe(this.id);
    this.router.navigate(["/recipes"]);
  }
}
