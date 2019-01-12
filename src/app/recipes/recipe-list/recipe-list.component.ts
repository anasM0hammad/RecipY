import { Component, OnInit  } from '@angular/core';
import { Recipe } from '../recipe.model' ;

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

	 recipes: Recipe[] = [

    new Recipe('Pastry' , 'Unique Apple Cream Pastry' , 'http://www.myiconfinder.com/uploads/iconsets/256-256-7275aebc435153f103fe46c706a7f332-pastry.png'),
    new Recipe('Chiken Leg' , 'All time Favorite' , 'https://cdn0.iconfinder.com/data/icons/cartoon-food/512/Food_512-22.png')

	];

  constructor() { }

  ngOnInit() {
  }

}
