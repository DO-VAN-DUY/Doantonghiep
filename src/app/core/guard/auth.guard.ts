import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  jwt = new JwtHelperService();
  constructor(private router:Router){
  }
  canActivate(  
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token = localStorage.getItem('user') ? true : false;
      // if(token!=null) return true;
      const user = this.jwt.decodeToken(localStorage.getItem('user') || '');
   
      // else false
      if(token==true && user.role=="Quan tri du an") // đã đăng nhập rồi mà cố tình dang nhap
      {
        this.router.navigateByUrl('/homes/index');
        return false;
      }
      if(token==true && user.role=="Nhan vien") // đã đăng nhập rồi mà cố tình dang nhap
      {
        this.router.navigateByUrl('/staff/thongtinnv');
        return false;
      } 
    return true;
  }
  
}
