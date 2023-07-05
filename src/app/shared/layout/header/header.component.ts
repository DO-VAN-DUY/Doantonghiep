import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from './../../../core/authentication/authentication.service';
import { BaseComponent } from 'src/app/core/common/base-component';
import { BehaviorSubject, Subject } from 'rxjs';
import { NgForm } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ApiService } from 'src/app/core/services/api.service';
import { UsersService } from 'src/app/core/services/users.service';
import { JwtHelperService } from '@auth0/angular-jwt';


declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends BaseComponent implements OnInit {
  @ViewChild('Formlydo')
  Formlydo:NgForm | undefined;
  public today:any;
  public list_item:any;
  public list_kiemtra:any;
  public list_nv:any;
  public user: any;
  public time: any;
  public Id:any;
  editor:any = ClassicEditor;
  editors:any = ClassicEditor;
  test: any;
  nv: any;
  currentUser:any;
  loading:boolean= false;
  loadingr:boolean= false;
  check_kcn: boolean= false;
  check_cn: boolean= false;
  check_krs: boolean= false;
  check_rs: boolean= false;
check:any;
check1:any;
kiemtra:any={
  lydovaomuon:"",
}
kiemtras:any={
  lydorasom:"",
}
jwt = new JwtHelperService();


  constructor( injector: Injector,private _api : ApiService,private authenticationService: AuthenticationService,private _user:UsersService) {
    super(injector);
   }

  ngOnInit(): void {
    this._user.getUser().subscribe(res=>{
      this.currentUser = res;
    
  const date1= new Date().toLocaleDateString(); 
  this._api.get('/api/Kiemtra/get_by_id?idnv=' + this.currentUser.id).subscribe(ress => {
    this.list_kiemtra = ress;
    const tg = Date.parse(this.list_kiemtra.ngay);
    let dates=new Date(tg).toLocaleDateString();
    // console.log(this.list_kiemtra);
    // console.log(date1);
   
    if(date1 == dates && this.list_kiemtra.trangthaivaomuon=='-1'){ 
      // alert("bạn đã check in");
      this.check_kcn=true;
     }
    
     if(date1 == dates && this.list_kiemtra.trangthaivaomuon=='0'){ 
      // alert("bạn đã check in");
      this.check_cn=true;
     }
     if(date1 == dates && this.list_kiemtra.trangthairasom=='-1'){ 
      // alert("bạn đã check in");
      this.check_krs=true;
     }
      if(date1 == dates && this.list_kiemtra.trangthairasom=='0'){ 
      // alert("bạn đã check in");
      this.check_rs=true;
     }
    
  })
    
    })
    this.today = new Date();
    
    this.user = this.authenticationService.userValue;
  
    
    
    this._api.get('/api/Times/hienthi').subscribe(res => {
     this.list_item = res;
      
  })
  
 
}
 checkin()
    {     
        var y= this.currentUser.id;
        const date= new Date();
        const times= new Date().toLocaleTimeString();
        const date1= new Date().toLocaleDateString(); 
        const date2= date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
  
        this._api.get('/api/Times/hienthi').subscribe(res => {
          this.list_item = res; 
          let time1= this.list_item[0].giovao;
          let time1a=new Date(time1).toLocaleTimeString();
            this._api.get('/api/Kiemtra/get_by_id?idnv=' + y).subscribe(ress => {
              this.list_kiemtra = ress; 
             
         if(this.list_kiemtra==null) 
         {
        
          if( times <= time1a){          
           
              this.check={
              idnv:y,
              hoten:this.currentUser.name,
              ngay:date2+'T00:00:00',
              giovao:date2+'T'+ times,     
              lydovaomuon:"",
              trangthaivaomuon:0,
              hople:1,
              sogio:0
              }  
              this._api.post('/api/Kiemtra/themcong',this.check).subscribe(res => {
              if(res.success)
              {
                this.check = res.data; 
                console.log(this.check);
              }    
  
               alert('Check in thành công'); 
              
               })
          }
          else
              {
                this.loading=true;
               
                if(this.list_kiemtra == null)
                {
                $('#Modalss').modal("show");
                alert('Chua den hoac da qua thoi gian check in');
                this.kiemtra={
                  idnv:y,
                  hoten:this.currentUser.name,
                  ngay:date2 ,
                  giovao:date2+'T'+ times,       
                  lydovaomuon:"",
                  trangthaivaomuon:1,
                  hople:1,
                  sogio:0
                }
                }
                else{
                  alert('Đã check in hoặc đang chờ phản hồi check in');
                }
              
          }  
         }
         else
         {
          
          const tg = Date.parse(this.list_kiemtra.ngay);
          let dates=new Date(tg).toLocaleDateString();
         if( times <= time1a && date1 != dates){          
          if(this.list_kiemtra == null || date1 != dates)
          {
            this.check={
            idnv:y,
            hoten:this.currentUser.name,
            ngay:date2+'T00:00:00',
            giovao:date2+'T'+ times,     
            lydovaomuon:"",
            trangthaivaomuon:0,
            hople:1,
            sogio:0
            }  
            this._api.post('/api/Kiemtra/themcong',this.check).subscribe(res => {
            if(res.success)
            {
              this.check = res.data; 
            }    

             alert('Check in thành công'); 
            
             })
          }
          else
          {
            if(this.list_kiemtra.trangthaivaomuon==1)
            {
              alert('Đang chờ phản hồi');
            }
            else{
              alert('Đã check in rồi');
            }
          }
        }
    else
        {
          this.loading=true;
          $('#Modalss').modal("show");
          if(this.list_kiemtra == null || date1 != dates)
          {
          alert('Chua den hoac da qua thoi gian check in');
          this.kiemtra={
            idnv:y,
            hoten:this.currentUser.name,
            ngay:date2 ,
            giovao:date2+'T'+ times,       
            lydovaomuon:"",
            trangthaivaomuon:1,
            hople:1,
            sogio:0
          }
          }
          else{
            alert('Đã check in hoặc đang chờ phản hồi check in');
          }
         
    }  
         
  }
           })
          
          
         
       })
}
public closeModal() {
  $('#Modalss').closest('.modal').modal('hide');
}
checkout()
{ 
  var x=this.currentUser.idnv;
  var y= this.currentUser.id;
  const times= new Date().toLocaleTimeString();
   const date= new Date();
   const date1= new Date().toLocaleDateString();
 
    const date2= date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
  this._api.get('/api/Times/hienthi').subscribe(res => {
    this.list_item = res; 

     let time2= this.list_item[0].giora;
  
     let time2a=new Date(time2).toLocaleTimeString();
  this._api.get('/api/Kiemtra/get_by_id?idnv=' +y).subscribe(ress => {
      this.list_kiemtra = ress;
      const ght = date.getHours();
      const gv= new Date(this.list_kiemtra.giovao).getHours(); 
      let hople=ght-gv-2;
      
      const tg = Date.parse(this.list_kiemtra.ngay);
      let dates=new Date(tg).toLocaleDateString();
    if(times >= time2a)
    {
          if(date1 == dates&& hople>=8)
          {
            this.check1={
            id:this.list_kiemtra.id,
            idnv:y,
            hoten:this.currentUser.name,
            ngay:this.list_kiemtra.ngay,
            giovao:this.list_kiemtra.giovao,
            giora:date2+'T'+ times,  
            // thang:this.list_kiemtra.thang,
            lydovaomuon:this.list_kiemtra.lydovaomuon,
            trangthaivaomuon:this.list_kiemtra.trangthaivaomuon,
            lydorasom:"",
            trangthairasom:0,
            hople:0,
            sogio:hople
           } 
           
          }
           if(date1 == dates&& hople<8)
           {
             this.check1={
             id:this.list_kiemtra.id,
             idnv:y,
             hoten:this.currentUser.name,
             ngay:this.list_kiemtra.ngay,
             giovao:this.list_kiemtra.giovao,
             giora:date2+'T'+ times,  
      
             lydovaomuon:this.list_kiemtra.lydovaomuon,
             trangthaivaomuon:this.list_kiemtra.trangthaivaomuon,
             lydorasom:"",
             trangthairasom:0,
             hople:1,
             sogio:hople
            } 
          }
            if(date1 == dates&& hople<3)
            {
              this.check1={
              id:this.list_kiemtra.id,
              idnv:y,
              hoten:this.currentUser.name,
              ngay:this.list_kiemtra.ngay,
              giovao:this.list_kiemtra.giovao,
              giora:date2+'T'+ times,  
            
              lydovaomuon:this.list_kiemtra.lydovaomuon,
              trangthaivaomuon:this.list_kiemtra.trangthaivaomuon,
              lydorasom:"",
              trangthairasom:0,
              hople:-1,
              sogio:hople
              }
             
           } 
           if(date1 != dates || this.list_kiemtra.trangthaivaomuon==1)
           { 
             alert(' Chua check in hoac tro phan hoi ');
             return;
           }  
           this._api.post('/api/Kiemtra/Suacong',this.check1).subscribe(res => {
             if(res.success)
              {
                  this.check1 = res.data;  
              }    
               alert('Check out thành công'); 
               return;
            })
          
           
      }          
    else
    {
      this.loadingr=true;
     
      alert('Chua den hoac da qua thoi gian check out');
      $('#Modals').modal("show");
        this.kiemtras={
              id:this.list_kiemtra.id,
              idnv:y,
              hoten:this.currentUser.name,
              ngay:this.list_kiemtra.ngay,
              giovao:this.list_kiemtra.giovao,
              giora:date2+'T'+ times,  
              // thang:this.list_kiemtra.thang,
              lydovaomuon:this.list_kiemtra.lydovaomuon,
              trangthaivaomuon:this.list_kiemtra.trangthaivaomuon,
              lydorasom:"",
              trangthairasom:1,
              hople:1,
              sogio:hople
        }
      
    }

    })
  })
 
  
}

Guis()
{
  this._api.post('/api/Kiemtra/Suacong',this.kiemtras).subscribe(res => {
    
   if(res.success)
   {
    this.kiemtras = res.data; 
  }    
  alert('Chờ phản hồi check out!'); 
  
  })
}
Gui()
{
  this._api.post('/api/Kiemtra/themcong',this.kiemtra).subscribe(res => {
    
   if(res.success)
   {
    this.kiemtra = res.data; 
  }    
  alert('Chờ phản hồi check in!'); 
  
  })
}

  logout() {
    this.authenticationService.logout();
  }
}