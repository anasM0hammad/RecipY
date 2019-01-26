import { Injectable } from '@angular/core' ;
import { AuthService } from './auth.service';
import { CanActivate , ActivatedRouteSnapshot , RouterStateSnapshot } from '@angular/router'

@Injectable()
export class AuthGuard implements CanActivate{

	constructor(private authService: AuthService){}
  
 canActivate(route: ActivatedRouteSnapshot , routerState: RouterStateSnapshot) {
    return this.authService.isAuthenticated();
 }

}