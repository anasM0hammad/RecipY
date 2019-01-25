import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params , Router } from '@angular/router' ;
import { Recipe } from '../recipe.model' ;
import { RecipeService } from '../recipe.service' ;
import { Ingredient } from '../../shared/ingredient.model';
import { DataStorageService } from '../../shared/data-storage.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{

 displayedRecipe: Recipe ;
 addStatus: Boolean = false ;
 recipeId: number ;


  constructor(private recipeService: RecipeService , private route: ActivatedRoute , private router: Router , private dataStorage: DataStorageService ) { }

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
   this.dataStorage.storeIngredients().subscribe();
 }

 onEditRecipe(){
    this.router.navigate(['edit'] , {relativeTo: this.route}) ;
 }


onDeleteRecipe(){
  this.recipeService.deleteRecipe(this.recipeId);
  this.router.navigate(['recipes']);
}
 

}
