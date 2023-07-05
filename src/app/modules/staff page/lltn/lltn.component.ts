import { Component, Injector, OnInit,ViewChild } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { UsersService } from 'src/app/core/services/users.service';
import { BaseComponent } from 'src/app/core/common/base-component';
import { AuthenticationService } from '../../../core/authentication/authentication.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-lltn',
  templateUrl: './lltn.component.html',
  styleUrls: ['./lltn.component.css']
})
export class LltnComponent extends BaseComponent implements OnInit {
  @ViewChild('Formlltns')
  Formlltns:NgForm | undefined;
  LLTN: any={
    "id": 0,
    "idnv": "" ,
    "hoten": "",
    "ngaysinh": "",
    "email": "",
    "sdt": "",
    "diachi": "",
    "chucvu": "",
    "gioitinh": "",
    "dantoc": "",
    "tongiao": "",
    "sonha": "",
    "masobaohiem": "",
    "hotencha": "",
    "namsinh": "",
    "quoctichb": "",
    "dantocb": "",
    "tongiaob": "",
    "nghenghiepcha": "",
    "sdtcha": "",
    "hokhauthuongtrub": "",
    "hotenme": "",
    "namsinhm": "",
    "quoctichm": "",
    "dantocm": "",
    "tongiaom": "",
    "hokhauthuongtrum": "",
    "slae": "",
    "quoctich": "",
    "Matk":""
  };
  LLTN1={};
  list_item: any;
  list_item_LLTN: any;
  currentUser: any;
  jwt = new JwtHelperService();
  constructor( injector: Injector,private _api : ApiService,private _user:UsersService,private authenticationService: AuthenticationService) {
    super(injector);
   }
  ngOnInit(): void {
    this._user.getUser().subscribe(res=>{
      this.currentUser = res;
    //  console.log(this.currentUser);
    var x= this.currentUser.id;
   
   
    this._api.get('/api/Nhanvien/get_by_id_nv/'+ x).subscribe(res => {
      this.list_item = res;
     
      var id= this.list_item.idtk
    
      this._api.get('/api/Nhanvien/get_by_idLLTN/'+ id).subscribe(res => {
        this.list_item_LLTN = res;
       // var date=new Date();
      //   var date1= new Date(res.ngaysinh);
      //   var date2= ("0"+date1.getDate().toString()) + '/'+("0"+(date1.getMonth()+1).toString()) + '/'+date1.getFullYear();
       // console.log(date2);
     var date= this.formatDate(new Date(res.ngaysinh));
       
        this.LLTN={
         "id":res.id,
          "idnv":  res.idnv,
          "hoten":  res.hoten,
          "ngaysinh": date,
          "email": res.email,
          "sdt": res.sdt,
          "diachi": res.diachi,
          "chucvu": res.chucvu,
          "gioitinh": res.gioitinh,
          "dantoc": res.dantoc,
          "tongiao": res.tongiao,
          "sonha": res.sonha,
          "masobaohiem": res.masobaohiem,
          "hotencha": res.hotencha,
          "namsinh": res.namsinh,
          "quoctichb": res.quoctichb,
          "dantocb": res.dantocb,
          "tongiaob": res.tongiaob,
          "nghenghiepcha": res.nghenghiepcha,
          "sdtcha": res.sdtcha,
          "hokhauthuongtrub": res.hokhauthuongtrub,
          "hotenme": res.hotenme,
          "namsinhm": res.namsinhm,
          "quoctichm": res.quoctichm,
          "dantocm": res.dantocm,
          "tongiaom": res.tongiaom,
          "hokhauthuongtrum": res.hokhauthuongtrum,
          "slae": res.slae,
          "quoctich": res.quoctich
        }    
      }); 
    });   
  })
  }
  LLTNS()  {
    //var y= this.list_item.idtk
   // var y= this.list_item.id
   var res=this.LLTN;
  this.LLTN1={
         "id":res.id,
          "idnv":  res.idnv,
          "hoten":  res.hoten,
          "ngaysinh": res.ngaysinh,
          "email": res.email,
          "sdt": res.sdt,
          "diachi": res.diachi,
          "chucvu": res.chucvu,
          "gioitinh": res.gioitinh,
          "dantoc": res.dantoc,
          "tongiao": res.tongiao,
          "sonha": res.sonha,
          "masobaohiem": res.masobaohiem,
          "hotencha": res.hotencha,
          "namsinh": res.namsinh,
          "quoctichb": res.quoctichb,
          "dantocb": res.dantocb,
          "tongiaob": res.tongiaob,
          "nghenghiepcha": res.nghenghiepcha,
          "sdtcha": res.sdtcha,
          "hokhauthuongtrub": res.hokhauthuongtrub,
          "hotenme": res.hotenme,
          "namsinhm": res.namsinhm,
          "quoctichm": res.quoctichm,
          "dantocm": res.dantocm,
          "tongiaom": res.tongiaom,
          "hokhauthuongtrum": res.hokhauthuongtrum,
          "slae": res.slae,
          "quoctich": res.quoctich
        } 
   this._api.post('/api/Nhanvien/SuaLLTN',this.LLTN1).subscribe(res => {
    if(res.success)
    {
     
      this.LLTN1= res.data;
      
     setTimeout(() => {
       this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
     });
    }
    console.log(this.LLTN1);
     alert('Sửa thành công');
  }) 
 }
}
