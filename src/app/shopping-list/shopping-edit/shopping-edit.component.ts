import { Component, OnInit, ViewChild  } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../../shared/ingredient.model' ;
import { ShoppingListService } from '../shopping-list.service' ;
import { DataStorageService } from '../../shared/data-storage.service' ;
import { NgForm } from '@angular/forms' ;
 
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  private subscription: Subscription ;
  @ViewChild('f') slForm: NgForm ;
  edittedItem: Ingredient ;
  edittedItemIndex: number
  editMode: Boolean = false ;

  
  constructor(private shoppingListService : ShoppingListService , private dataStorage: DataStorageService) { }

   ngOnInit() {
    this.subscription = this.shoppingListService.edittingIndex.subscribe(
        (index:number) => {
          this.editMode = true ;
          this.edittedItemIndex = index ;
          this.edittedItem = (this.shoppingListService.getOneIngredient(index)) ;
          this.slForm.setValue({
              'name' : this.edittedItem.name,
              'amount' : this.edittedItem.amount            
            });
        }
      );
  }

  onAddItem(form: NgForm){

    //UPDATING INGREDIENT
    if(this.editMode){
      const updatedName = form.value.name ;
      const updatedAmount = form.value.amount ;
      const updatedIngredient: Ingredient = { name : updatedName , amount : updatedAmount} ;
      this.shoppingListService.updateIngredient( this.edittedItemIndex , updatedIngredient) ;
      form.reset();
      this.editMode = false ;
    }

    //ADDING NEW INGREDIENT
    else{
     const value = form.value ;
     const newIngredient = new Ingredient(value.name , value.amount);
     this.shoppingListService.addIngredient(newIngredient);
     form.reset();
    }

    this.dataStorage.storeIngredients().subscribe(
        (data) => {
          console.log(data);
        }
      );
     
  }

  //DELETING SELECTED ITEM
    onDeleteItem(){
      this.shoppingListService.deleteIngredient(this.edittedItemIndex) ;
      this.onClear();
    }

  
  onClear(){
    this.slForm.reset();
    this.editMode = false ;
  }

}
