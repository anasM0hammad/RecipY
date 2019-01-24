import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params } from '@angular/router' ;
import { FormGroup , FormControl } from '@angular/forms' ;

import { RecipeService } from '../recipe.service' ;

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id:number ;
  recipeForm: FormGroup ;
  editMode = false ;

  constructor(private route: ActivatedRoute , private recipeService: RecipeService) { }

  ngOnInit() {
    
    this.route.params.subscribe( 
       (params:Params) => {
         this.id = +params['id'] ;
         params['id'] != null ? this.editMode = true : this.editMode = false ; 
         this.formInit();
       }
     );
  }


  private formInit() {

    let name = '' ;
    let imagePath = '';
    let description = '' ;

    if(this.editMode){
      const recipe = this.recipeService.getRecipeByIndex(this.id) ;
      name = recipe.name ;
      imagePath = recipe.imagePath ;
      description = recipe.description ;
    }

     this.recipeForm = new FormGroup({
       'name' :  new FormControl(name) ,
       'imagePath' : new FormControl(imagePath),
       'description' : new FormControl(description)
     });
  }



 onSubmit(){
   console.log(this.recipeForm) ;
 }

}
