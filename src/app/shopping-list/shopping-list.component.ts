import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model' ;

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

	ingredients: Ingredient[] = [
        
        new Ingredient('Apples' , 3),
        new Ingredient('Chocolate Sauce' , 1)
  
	];

  addIngredient(ingredient){

    if(ingredient.name === "" || ingredient.amount == null){
      ingredient.amount = 0 ;
      ingredient.name = "No Ingredient";
    }

    this.ingredients.push(ingredient);

  }


  constructor() { }

  ngOnInit() {
  }

}
