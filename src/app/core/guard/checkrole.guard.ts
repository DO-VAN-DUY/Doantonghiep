import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckroleGuard implements CanActivate {
 
  jwt = new JwtHelperService();
  constructor(private router:Router) {
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const user = this.jwt.decodeToken(localStorage.getItem('user') || '');
    
      if(user.role == route.data['role'][0])
      return true;   
      this.router.navigateByUrl('/login');
      return false;
  }
  
}
