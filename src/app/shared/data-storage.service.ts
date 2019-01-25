import { Injectable } from '@angular/core' ;
import { HttpClient } from '@angular/common/http' ;
import { RecipeService } from '../recipes/recipe.service' ;
import { Observable } from 'rxjs' ;
import { map  } from 'rxjs/operators' ;
import { ShoppingListService } from '../shopping-list/shopping-list.service' ;

 
@Injectable()
export class DataStorageService{
  
  constructor(private http: HttpClient , private recipeService: RecipeService , private shoppingListService: ShoppingListService){}
  
  storeRecipes(){
    return this.http.put('https://recipy-1b32c.firebaseio.com/recipes.json' , this.recipeService.getRecipe()) ;
  }

  getRecipes(){
  	this.http.get('https://recipy-1b32c.firebaseio.com/recipes.json').pipe(map(
       (recipes:any) => {
       	for( let recipe of recipes){
       		if(!recipe['ingredients']){
       			recipe['ingredients'] = [] ;
       		}
       	}
       	return recipes
       }
  	))
  	.subscribe(    
       (recipes) => {
       	 this.recipeService.setRecipes(recipes);
       }
  	 );
  }



  storeIngredients(){
  	return this.http.put('https://recipy-1b32c.firebaseio.com/ingredients.json' , this.shoppingListService.getIngredient()) ;
  }

}