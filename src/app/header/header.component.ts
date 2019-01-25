import { Component , OnInit } from '@angular/core' ;
import { DataStorageService } from '../shared/data-storage.service' ;
import { Subscription } from 'rxjs' ;

@Component({
 selector : 'app-header',
 templateUrl : './header.component.html'
})

export class headerComponent implements OnInit{

//   @Output() featureSelected = new EventEmitter<string>();

// 	onSelect(feature:string){
//           this.featureSelected.emit(feature) ;
// 	}


 constructor(private dataStorage: DataStorageService) {}

 saveData(){
   this.dataStorage.storeRecipes().subscribe(
    (data) => {
         
     }
  	);
 }

 getData(){
 	this.dataStorage.getRecipes();
 }

 ngOnInit(){
 	this.dataStorage.getRecipes();
 }



 }