import { EventEmitter , OnDestroy } from '@angular/core' ;
import { Subject } from 'rxjs' ;
import { Ingredient } from '../shared/ingredient.model' ;

export class ShoppingListService {

ingredientChanged = new Subject<Ingredient[]>();	
edittingIndex = new Subject<number>();

 private ingredients: Ingredient[] = [
        
        new Ingredient('Apples' , 3),
        new Ingredient('Chocolate Sauce' , 1)
  
	];


 

	 getIngredient(){
	 	return this.ingredients.slice();
	 }

	 getOneIngredient(index: number){
	   return this.ingredients[index];
	 }


	//ADDING NEW INGREDIENT AND UPDATING ARRAY
	 addIngredient(ingredient: Ingredient){
	 
	   this.ingredients.push(ingredient);
	   this.ingredientChanged.next(this.ingredients.slice());

	 }


	//ADD INGREDIENT THROUGH RECIPE ITEMS AND UPDATING ARRAY
	addRecipeIngredients(ingredients: Ingredient[]){
		 this.ingredients.push(...ingredients);
		 this.ingredientChanged.next(this.ingredients.slice());
	}


    //UPDATING INGREDIENT AND UPDATING ARRAY
    updateIngredient(index: number , updatedIngredient: Ingredient){
       
       this.ingredients[index] = updatedIngredient ; 
       this.ingredientChanged.next(this.ingredients.slice()) ;
    }



    //DELETING ITEM AND UPDATING ARRAY
    deleteIngredient(index: number){
    	this.ingredients.splice(index , 1) ;
    	this.ingredientChanged.next(this.ingredients.slice()) ;
    }
  
	
}