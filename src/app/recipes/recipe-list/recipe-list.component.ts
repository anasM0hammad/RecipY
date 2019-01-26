import { Component, OnInit , OnDestroy } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router' ;
import { Subscription } from 'rxjs' ;
import { Recipe } from '../recipe.model' ;
import { RecipeService } from '../recipe.service' ;
import { DataStorageService } from '../../shared/data-storage.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

	 recipes: Recipe[] ;
   private subscription: Subscription ;

  
  constructor(private recipeService: RecipeService , private router: Router , private route: ActivatedRoute , private dataStorage: DataStorageService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipe();
    this.subscription = this.recipeService.recipeChanged.subscribe(
       (recipes: Recipe[]) => {
          this.recipes = recipes ;
       }
    )

    this.dataStorage.getRecipes();
  }

 onNewRecipe(){
 	this.router.navigate(['new'] , {relativeTo: this.route});
 }

 ngOnDestroy(){
  this.subscription.unsubscribe();
 }


}
