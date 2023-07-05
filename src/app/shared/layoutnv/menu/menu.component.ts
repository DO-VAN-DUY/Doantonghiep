import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/common/base-component';
import { ApiService } from 'src/app/core/services/api.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent extends BaseComponent implements OnInit {

  public menus:any;
  constructor( injector: Injector,private _api : ApiService) {
    super(injector);
   }
  ngOnInit(): void {
    this._api.get('/api/Menu/hienthi').subscribe(res => {
      this.menus = res;   
      setTimeout(() => {
        this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
      });
    });
  }

}
