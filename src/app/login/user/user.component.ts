import { Component, Injectable, Injector, OnInit, ViewChild } from '@angular/core';

import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';

// import{AuthenService} from '../core/services/authen.service';
import { BaseComponent } from 'src/app/core/common/base-component';
import { ApiService } from 'src/app/core/services/api.service';
import { ActivatedRoute} from '@angular/router';
import { first } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { UsersService } from 'src/app/core/services/users.service';
import { JwtHelperService } from '@auth0/angular-jwt';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
@Injectable({ providedIn: 'root' })
export class UserComponent extends BaseComponent implements OnInit {
  jwt = new JwtHelperService();
  @ViewChild('loginForm')//truy xuất các thành phần từ con, cha sang con :input,con sang cha: output
  loginForm:NgForm | undefined;
  loading=false;
  public returnUrl: string | undefined;
  public email:any;
  public pass:any;

  model:any={};
  list_item: any;
  public error = '';
  currentUser:any;
  public user:any;
 
  constructor(injector: Injector,private authenticationService: AuthenticationService,private router: Router, private route: ActivatedRoute,private _api : ApiService,private _user:UsersService) { 
    super(injector);
    if (this.authenticationService.userValue) {
      this.router.navigate(['/']);
    }
  }
  ngOnInit(): void {
  //  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/homes/chinhanh';
  }
  login()
  {
     
    const x=this.model.taikhoan;
    const y=this.model.password;
    if(x=="" ||y=="")
    {
      this.loading=false;
      alert('Vui lòng nhập thông tin');
     
      return;  
    }
    else
    {
      
      this.loading=true;
      this.authenticationService.login(x,y)
      .pipe(first()).subscribe(
        (data) => {
          this._user.getUser().subscribe(res=>{
            this.currentUser = res;
           
            
          if(this.currentUser.role=='Quan tri du an')
          {
         this.router.navigate([this.route.snapshot.queryParams['returnUrl'] || '/homes/index']);
          }
         else
         {
          this.router.navigate([this.route.snapshot.queryParams['returnUrl'] || 'staff/thongtinnv']);
         }
          
           })
         // console.log(data);
        //  this.user = this.authenticationService.userValue;
        //  const user = this.jwt.decodeToken(data);
         //this.router.navigate([this.returnUrl]);
        },
        (error) => {
          this.error = error;
          this.loading = false;   
        });
      
     }
     
    }
    
  }
  


