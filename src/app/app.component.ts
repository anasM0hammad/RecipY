import { Component, OnInit} from '@angular/core';
import * as firebase from 'firebase' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	ngOnInit(){
       firebase.initializeApp({
         apiKey: "AIzaSyBzGw8A-I6pfxgQ5hcQLj5p8PnbXbHHZxs",
        authDomain: "recipy-1b32c.firebaseapp.com"
       });
	}

   loadFeature:string = 'recipe' ;

	navigate(feature){
       this.loadFeature = feature ;
	}
}
