import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'pizza',
      // eslint-disable-next-line max-len
      imageUrl: 'https://th.bing.com/th/id/R.016d5fefa51fa68f2a6bf84cca36b3a6?rik=oif55rXMJ34p9A&riu=http%3a%2f%2fwww.delonghi.com%2fGlobal%2frecipes%2fmultifry%2fpizza_fresca.jpg&ehk=kBrf2t%2fxrOJ8trVNI0VhgLUzpbdX8hPp4vZ65z8YSfc%3d&risl=&pid=ImgRaw&r=0',
      ingredients: ['tomoto', 'butter', 'chilly']
    },
    {
      id: 'r2',
      title: 'Burgger',
      imageUrl: 'https://th.bing.com/th/id/OIP.75QMvFTRmPy3B1SB-YwCbQHaE8?pid=ImgDet&rs=1',
      ingredients: ['tomoto', 'butter', 'chilly']
    },
  ];
  constructor() { }
  getAllRecipes() {
    //used spread operator for creating copy of array or object
    return [...this.recipes];
  }
  getRecipe(recipeId: string) {
    // eslint-disable-next-line arrow-body-style
    return { ...this.recipes.find(recipe => { return recipe.id === recipeId; }) };
  }
  deleteRecipe(recipeId: string) {
    // eslint-disable-next-line arrow-body-style
    this.recipes = this.recipes.filter(recipe => { return recipe.id !== recipeId; });
    console.log(this.recipes);

  }
}
