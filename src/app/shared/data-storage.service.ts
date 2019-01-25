import { Injectable } from '@angular/core' ;
import { HttpClient } from '@angular/common/http' ;
import { RecipeService } from '../recipes/recipe.service' ;
import { Observables } from 'rxjs' ;
import { map  } from 'rxjs/operators' ;

 
@Injectable()
export class DataStorageService{
  
  constructor(private http: HttpClient , private recipeService: RecipeService){}
  
  storeRecipes(){
    return this.http.put('https://recipy-1b32c.firebaseio.com/recipes.json' , this.recipeService.getRecipe()) ;
  }

  getRecipes(){
  	this.http.get('https://recipy-1b32c.firebaseio.com/recipes.json').pipe(map(
       (recipes) => {
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

}