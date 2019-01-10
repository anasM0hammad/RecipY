import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model' ;

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

	recipes: Recipe[] = [

    new Recipe('Test' , 'This is a Test Recipe' , ''),
    new Recipe('Test2' , 'This is 2 Test Recipe' , '')

	];

  constructor() { }

  ngOnInit() {
  }

}
