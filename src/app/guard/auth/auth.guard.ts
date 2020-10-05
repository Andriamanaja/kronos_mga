import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Auth } from 'src/app/model/helper/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {

  constructor(){

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return Auth.access;
  }
}
