import { EventEmitter , OnDestroy } from '@angular/core' ;
import { Subject } from 'rxjs' ;
import { Ingredient } from '../shared/ingredient.model' ;

export class ShoppingListService {

ingredientChanged = new Subject<Ingredient[]>();	
edittingIndex = new Subject<number>();

 private ingredients: Ingredient[] = [];
 

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
  

   //SETTING THE VALUE OF INGREDIENTS IN ARRAY FROM DB
    setIngredients(ingredients){
    	
	    	this.ingredients = ingredients ;
	    	this.ingredientChanged.next(this.ingredients.slice());
      
    }
	
}