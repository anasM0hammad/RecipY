import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router' ;
import { NgForm } from '@angular/forms' ;
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  
  onSubmit(form: NgForm){
      const email = form.value.email ;
      const password = form.value.password ;
      this.authService.signin(email , password) ;
      this.router.navigate(['/']);
      form.reset();
  }
 

}
