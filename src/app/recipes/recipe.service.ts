import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test',
      'http://kusaka.co/wordpress/wp-content/uploads/2016/02/Avocado-Toast-Recipe-Step-by-Step-11.jpg'),
    new Recipe('Another Test Recipe', 'This is simply a test',
      'http://kusaka.co/wordpress/wp-content/uploads/2016/02/Avocado-Toast-Recipe-Step-by-Step-11.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
