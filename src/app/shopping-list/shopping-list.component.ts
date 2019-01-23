import { Component, OnInit , OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs' ;
import { Ingredient } from '../shared/ingredient.model' ;
import { ShoppingListService } from './shopping-list.service' ;

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit , OnDestroy {

	ingredients: Ingredient[] ;
  private subscription: Subscription ;
  
  // addIngredient(ingredient){

  //   if(ingredient.name === "" || ingredient.amount == null){
  //     ingredient.amount = 0 ;
  //     ingredient.name = "No Ingredient";
  //   }

  //   this.ingredients.push(ingredient);

  // }


  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit() {

     this.ingredients = this.shoppingListService.getIngredient() ;
    this.subscription = this.shoppingListService.ingredientChanged.subscribe(
           (ingredients: Ingredient[]) => {
           this.ingredients = ingredients ;
         }
       );  
  }

  onEditItem(index: number){
    this.shoppingListService.edittingIndex.next(index);
  }



  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}


 