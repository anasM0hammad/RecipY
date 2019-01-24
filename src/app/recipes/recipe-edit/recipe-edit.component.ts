import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute , Params } from '@angular/router' ;
import { FormGroup , FormControl , Validators , FormArray} from '@angular/forms' ;

import { RecipeService } from '../recipe.service' ;
import { Recipe } from '../recipe.model' ;

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id:number ;
  recipeForm: FormGroup ;
  editMode = false ;
  editDone = false ;
  addDone  = false ;

  constructor(private route: ActivatedRoute , private recipeService: RecipeService , private router: Router) { }

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
    let recipeIngredients = new FormArray([]);

    if(this.editMode){
      const recipe = this.recipeService.getRecipeByIndex(this.id) ;
      name = recipe.name ;
      imagePath = recipe.imagePath ;
      description = recipe.description ;
      if(recipe.ingredients){
        for(let ingredient of recipe.ingredients){
          recipeIngredients.push(
            new FormGroup({
              'name' : new FormControl(ingredient.name , Validators.required) ,
              'amount' : new FormControl(ingredient.amount , [Validators.required , Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
           );
        }
      }

    }

     this.recipeForm = new FormGroup({
       'name' :  new FormControl(name , Validators.required) ,
       'imagePath' : new FormControl(imagePath , Validators.required),
       'description' : new FormControl(description , Validators.required),
       'ingredients' : recipeIngredients 
     });
  }



 onSubmit(){
    let name = this.recipeForm.value['name'];
    let imagePath = this.recipeForm.value['imagePath'];
    let description = this.recipeForm.value['description'];
    let ingredient = this.recipeForm.value['ingredients'] ;

    let recipe = new Recipe(name , description , imagePath , ingredient) ;

    if(this.editMode){
      //UPDATING RECIPE
      this.recipeService.updateRecipe(this.id , recipe) ;
      this.editDone = true ;
       this.router.navigate(['recipes' , this.id]);
    }

    else{
      //NEW RECIPE
      this.recipeService.addNewRecipe(recipe);
      this.addDone = true ;
      this.router.navigate(['recipes']);
    }

    this.recipeForm.reset();
 }




 addIngredientControl(){
   const control: FormGroup = new FormGroup({
     'name' : new FormControl('' , Validators.required) ,
     'amount' : new FormControl('' , [Validators.required , Validators.pattern(/^[1-9]+[0-9]*$/)])
   }) ;
   (<FormArray>this.recipeForm.get('ingredients')).push(control);
 }


 onCancel(){
   this.recipeForm.reset();
   this.router.navigate(['recipes' , this.id]);
 }


 deleteIngredient(index: number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
 }

}
