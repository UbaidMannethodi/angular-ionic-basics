import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe: Recipe;
  constructor(
    private activatedRoutes: ActivatedRoute,
    private recipeService: RecipesService
  ) { }

  ngOnInit() {
    this.activatedRoutes.paramMap.subscribe(paramMap => {
      //Check if  Id Exist
      if (!paramMap.has('recipeId')) {
        //redirect
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.recipeService.getRecipe(recipeId);

    });
  }

}
