import { Component, OnInit , Input } from '@angular/core';
import { Recipe } from '../recipe.model' ;
import { RecipeService } from '../recipe.service' ;
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

 @Input() displayedRecipe: Recipe ;


  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

 addToShoppingList(){

 	this.recipeService.sendToShoppingList(this.displayedRecipe.ingredients);
 }


}
