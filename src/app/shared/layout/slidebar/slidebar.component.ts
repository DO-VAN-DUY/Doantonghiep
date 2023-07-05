import { Component, OnInit , Injector} from '@angular/core';
import { BaseComponent } from 'src/app/core/common/base-component';
import { ApiService } from 'src/app/core/services/api.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.css']
})
export class SlidebarComponent extends BaseComponent implements OnInit{
  public menus:any;
  public currentUser:any;
  menup: any;
  menup1: any;
  menup2:any;
  menu:boolean= true;
  menuss:boolean= true;
  constructor( injector: Injector,private _api : ApiService,private _user:UsersService) {
    super(injector);
   }

  ngOnInit(): void {
    this._user.getUser().subscribe(res=>{
      this.currentUser = res;
     
      this._api.get('/api/Menu/hienthi').subscribe(res => {
        this.menus = res;   
      
        setTimeout(() => {
          this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
        });
     
       
      });
      this._api.get('/api/Menu/hienthiP').subscribe(res => {
        this.menup = res;      
        setTimeout(() => {
          this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
        });
      if(this.currentUser.role=="Quan tri du an")
       {
       
        this.menuss=false;
        this.menuss=false;

        }
       if(this.currentUser.role!="Quan tri du an")
       {
        this.menu=false;
        // this.menus[1]=false;
        // this.menus[2]=false;
        // this.menus[3]=false;
        // this.menus[4]=false;
        // this.menus[5]=false;
        // this.menus[6]=false;
        // this.menus[7]=false;
        
        // this.menup[0]=false;
        // this.menup[1]=false;
        // this.menup[2]=false;
        // this.menup[3]=false;
        // this.menup[4]=false;
        // this.menup[5]=false;
      
        // this.menup1[0]=false;
        // this.menup1[1]=false;
        // this.menup1[2]=false;

        // this.menup2[0]=false;
        // this.menup2[1]=false;
       
       }
     
       
      });
      this._api.get('/api/Menu/hienthiP1').subscribe(res => {
        this.menup1 = res;   
      
        setTimeout(() => {
          this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
        });
     
       
      });
      this._api.get('/api/Menu/hienthiP2').subscribe(res => {
        this.menup2 = res;   
      
        setTimeout(() => {
          this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
        });
     
       
      });
      
    })
      
      
  }
}


