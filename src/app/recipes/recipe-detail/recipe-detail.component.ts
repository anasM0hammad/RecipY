import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router' ;
import { Recipe } from '../recipe.model' ;
import { RecipeService } from '../recipe.service' ;
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

 displayedRecipe: Recipe ;
 addStatus: Boolean = false ;
 recipeId: number ;


  constructor(private recipeService: RecipeService , private route: ActivatedRoute) { }

  ngOnInit() {
	    this.route.params.subscribe(
	      (params: Params) => {
	    	this.recipeId = +params['id'];
	    	 this.displayedRecipe = this.recipeService.getRecipeByIndex(this.recipeId);
	    }
	   );
  }

 

 addToShoppingList(){

 	this.recipeService.sendToShoppingList(this.displayedRecipe.ingredients);
 	this.addStatus = true ;
 }

 

}
