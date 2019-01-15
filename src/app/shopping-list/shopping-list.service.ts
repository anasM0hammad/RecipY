import { EventEmitter } from '@angular/core' ;
import { Ingredient } from '../shared/ingredient.model' ;

export class ShoppingListService {

ingredientChanged = new EventEmitter<Ingredient[]>();	

 private ingredients: Ingredient[] = [
        
        new Ingredient('Apples' , 3),
        new Ingredient('Chocolate Sauce' , 1)
  
	];


 

 getIngredient(){

 	return this.ingredients.slice();
 }

 addIngredient(ingredient: Ingredient){
 
   this.ingredients.push(ingredient);
   this.ingredientChanged.emit(this.ingredients);

 }

	
}