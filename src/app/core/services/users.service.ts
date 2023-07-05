import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/app/environments/environment.prod';


import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService{

  jwt = new JwtHelperService();
  constructor(private http:HttpClient) { }
    getUser(){
        const token = localStorage.getItem('user') || '';
        const user = this.jwt.decodeToken(token);
        
    
        return this.http.get(environment.BASE_API+'/api/User/get_bt_id/'+ user.Id);
      }
}
