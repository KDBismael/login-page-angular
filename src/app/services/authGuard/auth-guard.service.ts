import { Injectable } from '@angular/core';
import { Router,CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { AuthServiceService } from '../authServices/auth-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(public auth: AuthServiceService,public router: Router) {}
  canActivate( next:ActivatedRouteSnapshot, state:RouterStateSnapshot) :boolean{
    if(!this.auth.isAuthenticated()){
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
