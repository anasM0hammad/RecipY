import { NgModule } from '@angular/core' ;
import { Routes , RouterModule } from '@angular/router' ;

import { HomeComponent } from './home/home.component' ;
import { RecipesComponent } from './recipes/recipes.component' ;
import { ShoppingListComponent } from './shopping-list/shopping-list.component' ;

const appRoutes: Routes = [

 {path: '' , component:HomeComponent , pathMatch: "full"},
 {path: 'recipes' , component: RecipesComponent },
 {path: 'shopping-list' , component: ShoppingListComponent }

];

@NgModule({

imports: [RouterModule.forRoot(appRoutes)],
exports: [RouterModule]
})
export class AppRoutingModule{

}