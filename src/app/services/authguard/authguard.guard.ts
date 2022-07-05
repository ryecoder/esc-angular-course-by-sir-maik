import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {

  constructor(
    private loginService: LoginService,
    private router: Router
  ){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    var isSessionAuthenticatedTemp = localStorage.getItem('sessionAuthenticated')
    var isAuthenticated = isSessionAuthenticatedTemp == 'true'

    if(!isAuthenticated){
      this.router.navigate(['/'])
    }

    return isAuthenticated;

  }

}
