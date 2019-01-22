import { EventEmitter } from '@angular/core' ;
import { Subject } from 'rxjs' ;
import { Ingredient } from '../shared/ingredient.model' ;

export class ShoppingListService {

ingredientChanged = new Subject<Ingredient[]>();	

 private ingredients: Ingredient[] = [
        
        new Ingredient('Apples' , 3),
        new Ingredient('Chocolate Sauce' , 1)
  
	];


 

 getIngredient(){

 	return this.ingredients.slice();
 }

 addIngredient(ingredient: Ingredient){
 
   this.ingredients.push(ingredient);
   this.ingredientChanged.next(this.ingredients.slice());

 }

addRecipeIngredients(ingredients: Ingredient[]){
	this.ingredients.push(...ingredients);
	 this.ingredientChanged.next(this.ingredients.slice());
}

	
}