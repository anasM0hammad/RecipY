import { Injectable } from '@angular/core' ;
import { HttpClient } from '@angular/common/http' ;
import { RecipeService } from '../recipes/recipe.service' ;
 
@Injectable()
export class DataStorageService{
  
  constructor(private http: HttpClient , private recipeService: RecipeService){}
  
  storeRecipes(){
    return this.http.put('https://recipy-1b32c.firebaseio.com/recipes.json' , this.recipeService.getRecipe() )
  }

}