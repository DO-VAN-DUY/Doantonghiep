import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/common/base-component';
import { ApiService } from 'src/app/core/services/api.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-luongnv',
  templateUrl: './luongnv.component.html',
  styleUrls: ['./luongnv.component.css']
})
export class LuongnvComponent extends BaseComponent implements OnInit{
  currentUser: any;
  luongnv: any;
  constructor( injector: Injector,private _api : ApiService,private _user:UsersService) {
    super(injector);
    
   }
  ngOnInit(): void {
  
    this._user.getUser().subscribe(res=>{
      this.currentUser = res;
      
      this._api.get('/api/Luong/get_by_id?idnv='+this.currentUser.id).subscribe(res => {
        this.luongnv = res;
      })
    })
    
   
  }
}

