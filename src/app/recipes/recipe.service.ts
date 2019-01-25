import { EventEmitter, Injectable } from '@angular/core' ;
import { Subject } from 'rxjs' ;
import { Recipe } from './recipe.model' ;
import { Ingredient } from '../shared/ingredient.model' ;
import { ShoppingListService } from '../shopping-list/shopping-list.service' ;

@Injectable()
export class RecipeService {

  recipeChanged = new Subject<Recipe[]>() ;
 
 constructor(private shoppingListService: ShoppingListService){}

  private recipes : Recipe[] =  [

    // new Recipe('Pastry' ,
    //   'Unique Apple Cream Pastry' ,
    //   'http://www.myiconfinder.com/uploads/iconsets/256-256-7275aebc435153f103fe46c706a7f332-pastry.png',
    //   [
    //       new Ingredient('Apples' , 3) ,
    //       new Ingredient('cream' , 2) 
        
    //   ]),

    // new Recipe('Chiken Leg' ,
    //            'All time Favorite' , 
    // 	         'https://cdn0.iconfinder.com/data/icons/cartoon-food/512/Food_512-22.png',            
	   //             [
				//           new Ingredient('Leg' , 3) ,
				//           new Ingredient('Onions' , 2) 
	        
	   //             ]
     
    // 	       )
	];



	recipeSelected = new EventEmitter<Recipe>();


	getRecipe(){
		return this.recipes.slice();
	}


  sendToShoppingList(ingredients: Ingredient[]){
      this.shoppingListService.addRecipeIngredients(ingredients);
  }

  getRecipeByIndex(index:number){
    return this.recipes[index];
  }

  //UPDATING THE RECIPE
  updateRecipe(index: number , updatedRecipe: Recipe){
    this.recipes[index] = updatedRecipe ;
    this.recipeChanged.next(this.recipes.slice());
  }

  //ADDING NEW RECIPE
  addNewRecipe(newRecipe: Recipe){
    this.recipes.push(newRecipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  //DELETING RECIPE

  deleteRecipe(index: number){
    this.recipes.splice(index , 1) ;
    this.recipeChanged.next(this.recipes.slice());
  }


  //GETTING RECIPES FROM DB
  setRecipes(recipes: Recipe[]){
    this.recipes = recipes ;
    this.recipeChanged.next(this.recipes.slice()) ;
  }

}