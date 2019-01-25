import { Component, OnInit , OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs' ;
import { Ingredient } from '../shared/ingredient.model' ;
import { ShoppingListService } from './shopping-list.service' ;
import { DataStorageService } from '../shared/data-storage.service' ;

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit , OnDestroy {

	ingredients: Ingredient[] ;
  private subscription: Subscription ;

  constructor(private shoppingListService : ShoppingListService , private dataStorage: DataStorageService) { }

  ngOnInit() {

     this.ingredients = this.shoppingListService.getIngredient() ;
    this.subscription = this.shoppingListService.ingredientChanged.subscribe(
           (ingredients: Ingredient[]) => {
           this.ingredients = ingredients ;
         }
       );  


    this.dataStorage.getIngredients() ;
  }

  onEditItem(index: number){
    this.shoppingListService.edittingIndex.next(index);
  }



  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}


 