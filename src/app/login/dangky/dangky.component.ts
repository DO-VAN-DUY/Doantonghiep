import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { BaseComponent } from 'src/app/core/common/base-component';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-dangky',
  templateUrl: './dangky.component.html',
  styleUrls: ['./dangky.component.css']
})
export class DangkyComponent extends BaseComponent implements OnInit {
  @ViewChild('ResForm')
  ResForm:NgForm | undefined;

  model:any={
  }
  constructor(injector: Injector,private _api : ApiService) {
    super(injector);
   }
  ngOnInit(): void {
    this.model={
      Id:"",
           name:"",
           email:"",
           sdt:"",
           diachi:"",
           gioitinh:"",
           taikhoan:"",
           password:"",
           role:"Nhân viên",
           token:""
    }
  }
  res()
  {
    var x=this.model;
    console.log(x);
    if(!this.ResForm?.valid)
    {
      alert('Vui lòng nhập thông tin đầy đủ');
      return;
    }
    else
    {
    this._api.post('/api/User/create_user',x).subscribe(res => {
     if(res.success)
     {
      this.model = res.data; 
     
      
      setTimeout(() => {
        this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
      });   
     }
     alert('Thêm thành công');
    }
   
  )
 
   }
        
  
    
  }

}
