import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BaseComponent } from 'src/app/core/common/base-component';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-fgpass',
  templateUrl: './fgpass.component.html',
  styleUrls: ['./fgpass.component.css']
})
export class FgpassComponent extends BaseComponent implements OnInit {
  @ViewChild('fgpassForm')
  fgpassForm:NgForm | undefined;
  emailcu: any={
    email:""
  }
  passmoi:any={
    Id:"",
    name:"",
    email:"",
    sdt:"",
    diachi:"",
    gioitinh:"",
    taikhoan:"",
    password:"",
    passwordlm:"",
    role:"",
    token:""
  }
  pass:any={
    
    password:"",
    passwordlm:"",
   
  }
  public isLoading= false;
  public isLoad= true;
  public isNot= false;
  list_item: any;
  list_email: any;
  constructor(injector: Injector,private _api : ApiService) {
    super(injector);
   }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
Xacthuc(email:any)
{
  this._api.get('/api/User/get_all').subscribe(res => {
    this.list_item = res;
    this._api.get('/api/User/get_bt_id?email='+ email).subscribe(res => {
      this.list_email = res;

      this.isLoad=false;
      this.isLoading=true;
     
    });
    
  });
}
Xacnhan()
{
  this._api.get('/api/User/get_all').subscribe(res => {
    this.list_item = res;
    for(var index in this.list_item)
    {
    
      if(this.list_item[index].email==this.emailcu.email)
      {
        this.list_item[index].email=this.Xacthuc(this.list_item[index].email);
      }
      else(
        this.isNot=true
      )
    }
   
  });
  
}
Editpass()
{
  this.passmoi={
    Id:this.list_email.id,
    name:this.list_email.name,
    email:this.list_email.email,
    sdt:this.list_email.sdt,
    diachi:this.list_email.diachi,
    gioitinh:this.list_email.gioitinh,
    taikhoan:this.list_email.taikhoan,
    password:this.pass.password,
    role:this.list_email.role,
    token:this.list_email.token
  }
  console.log(this.passmoi);
  this._api.post('/api/User/update_user',this.passmoi).subscribe(res => {
    if(res.success)
    {
     this.passmoi = res.data;
     setTimeout(() => {
       this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
     });
    
    }
    alert('Lưu thông tin thành công');
  }
 )
  
}

}
