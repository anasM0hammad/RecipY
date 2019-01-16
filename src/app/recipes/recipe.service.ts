import { EventEmitter, Injectable } from '@angular/core' ;
import { Recipe } from './recipe.model' ;
import { Ingredient } from '../shared/ingredient.model' ;
import { ShoppingListService } from '../shopping-list/shopping-list.service' ;

@Injectable()
export class RecipeService {
 
 constructor(private shoppingListService: ShoppingListService){}

  private recipes : Recipe[] =  [

    new Recipe('Pastry' ,
      'Unique Apple Cream Pastry' ,
      'http://www.myiconfinder.com/uploads/iconsets/256-256-7275aebc435153f103fe46c706a7f332-pastry.png',
      [
          new Ingredient('Apples' , 3) ,
          new Ingredient('cream' , 2) 
        
      ]),

    new Recipe('Chiken Leg' ,
               'All time Favorite' , 
    	         'https://cdn0.iconfinder.com/data/icons/cartoon-food/512/Food_512-22.png',            
	               [
				          new Ingredient('Leg' , 3) ,
				          new Ingredient('Onions' , 2) 
	        
	               ]
     
    	       )
	];



	recipeSelected = new EventEmitter<Recipe>();


	getRecipe(){
		return this.recipes.slice();
	}


  sendToShoppingList(ingredients: Ingredient[]){
      this.shoppingListService.addRecipeIngredients(ingredients);
  }



}