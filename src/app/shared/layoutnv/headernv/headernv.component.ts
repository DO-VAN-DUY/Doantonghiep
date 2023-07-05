import { Component, Injector, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { BaseComponent } from 'src/app/core/common/base-component';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-headernv',
  templateUrl: './headernv.component.html',
  styleUrls: ['./headernv.component.css']
})
export class HeadernvComponent extends BaseComponent implements OnInit {
  public today:any;
  public user: any;
  constructor( injector: Injector,private _api : ApiService,private authenticationService: AuthenticationService) {
    super(injector);
   }

  ngOnInit(): void {
    this.today = new Date();
    this.user = this.authenticationService.userValue;
  
  }

  checkin()
  {
    const dateNow = new Date();
    const now =   new Date(new Date(dateNow).getTime() - 1000 * 60 * 60 * 8);
    
    
  console.log(now);
  }
  logout() {
    this.authenticationService.logout();
  }
}
