import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class HomesGuard implements CanActivate {
  constructor(private router:Router){
  }
  jwt = new JwtHelperService();
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token = localStorage.getItem('user') ? true : false;
      // if(token!=null) return true;
      // else false
      if(token==false)// chua dang nhap
      { 
        this.router.navigateByUrl('/login');
        return false;
      }
     return true;
  }
  
  
  
}
