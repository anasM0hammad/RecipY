import { Injectable } from '@angular/core' ;
import { HttpClient } from '@angular/common/http' ;
import { RecipeService } from '../recipes/recipe.service' ;
import { Observable } from 'rxjs' ;
import { map  } from 'rxjs/operators' ;
import { ShoppingListService } from '../shopping-list/shopping-list.service' ;
import { AuthService } from '../auth/auth.service';

 
@Injectable()
export class DataStorageService{
  
  constructor(private http: HttpClient ,
   private recipeService: RecipeService ,
    private shoppingListService: ShoppingListService,
    private authService: AuthService){}
  
  storeRecipes(){
     const token: string = this.authService.getToken() ;
    return this.http.put('https://recipy-1b32c.firebaseio.com/recipes.json?auth='+token , this.recipeService.getRecipe()) ;
  }

  getRecipes(){
    const token: string = this.authService.getToken() ;
  	this.http.get('https://recipy-1b32c.firebaseio.com/recipes.json?auth=' + token).pipe(map(
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
     const token: string = this.authService.getToken() ;
  	return this.http.put('https://recipy-1b32c.firebaseio.com/ingredients.json?auth=' + token , this.shoppingListService.getIngredient()) ;
  }


  getIngredients(){
     const token: string = this.authService.getToken() ;
  	this.http.get('https://recipy-1b32c.firebaseio.com/ingredients.json?auth=' + token).subscribe(
      (data)=> {
      	this.shoppingListService.setIngredients(data) ;
      }
  	)
  }

}