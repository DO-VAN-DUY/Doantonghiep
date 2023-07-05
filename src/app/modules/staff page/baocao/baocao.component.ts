import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BaseComponent } from 'src/app/core/common/base-component';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ApiService } from 'src/app/core/services/api.service';
import { UsersService } from 'src/app/core/services/users.service';
import { AuthenticationService } from './../../../core/authentication/authentication.service';
declare var $:any;
@Component({
  selector: 'app-baocao',
  templateUrl: './baocao.component.html',
  styleUrls: ['./baocao.component.css']
})
export class BaocaoComponent extends BaseComponent implements OnInit{
 
  @ViewChild('Formbaocao')
  Formbaocao:NgForm | undefined;
  editor:any = ClassicEditor;
  editors:any = ClassicEditor;
  filterBy:any;
  public loc:any;
  public page: any = 1;
  public id: any;
  public pageSize: any = 7;
  public totalItem: any;
  public list_item:any;
  public list_items:any;
  currentUser: any;
  user: any;
  public baocao:any={};
  public dates:any
  public capnhatbaocao:any={};
  constructor( injector: Injector,private _api : ApiService,private _user:UsersService,private authenticationService: AuthenticationService) {
    super(injector);
   }
   ngOnInit(): void {
    this.dates= this.transform(new Date());
    var date= this.formatDate(new Date());
   
    this._user.getUser().subscribe(res=>{
      this.currentUser = res;
      this.baocao=
      {
        idnv:this.currentUser.id,
        thu:this.dates,
        ngay:date,
        noidung:"",
        linkbaocao:"", 
      } 
      this.capnhatbaocao={
        id:this.baocao.id,
        idnv: this.baocao.idnv,
        thu:this.baocao.thu,
        ngay:date,
        noidung: this.baocao.noidung,
        nhanxet: this.baocao.nhanxet,  
        linkbaocao:this.baocao.linkbaocao,
      } 
      this._api.get('/api/Nhanvien/getonebaocao?idnv='+ this.currentUser.id).subscribe(res => {
        this.list_items = res; 
         
        var date1= this.formatDate(new Date(this.list_items.ngay));
        if(this.list_items=="" || date!=date1)
        {
          this._api.post('/api/Nhanvien/Thembaocao',this.baocao).subscribe(res => { 
            if(res.success)
            {
             this.baocao = res.data;
            this.LoadData();
             setTimeout(() => {
               this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
             });
             
            }
          
        }) 
       }

        
      });
      this._api.get('/api/Nhanvien/get_by_id_baocao?idnv='+ this.currentUser.id).subscribe(res => {
        this.list_item = res; 
      });
      this.loc = localStorage.getItem('loc') || '';
      this._route.params.subscribe(params => {
        this.id = params['id'];
        this._api.post('/api/Congviec/searchbaocao',{ loc: this.loc, page: this.page, pageSize: this.pageSize, Id: this.id }).subscribe(res => {
          this.list_item = res.data;
          this.totalItem = res.totalItems;
          setTimeout(() => {
            this.loadScripts('assets/js/hide_menu.js', 'assets/js/slide_show.js');
          });
        });
      });
    
})

}
public LoadData() {
  this._api.post('/api/Congviec/searchbaocao', {page: 1, pageSize: 10, noidung:this.capnhatbaocao.noidung}).subscribe(res => {
    this.list_item = res.data;
    this.totalItem = res.totalItems;
    setTimeout(() => {
     this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
   });
  });
}
public loadPage(page: any) {
  this._api.post('/api/Congviec/searchbaocao',{loc: this.loc, page: page, pageSize: this.pageSize, Id: this.id}).subscribe(res => {
    this.list_item = res.data;
    this.totalItem = res.totalItems;
    setTimeout(() => {
      this.loadScripts('assets/js/hide_menu.js', 'assets/js/slide_show.js');
    });
  });
}

EditModel(it:any)
{
  this.baocao=it;
  var date= this.formatDate(new Date(it.ngay));
  this.capnhatbaocao={
    id:it.id,
    idnv: this.baocao.idnv,
    thu:it.thu,
    ngay:date,
    noidung: this.baocao.noidung,
    nhanxet: this.baocao.nhanxet,  
    linkbaocao:this.baocao.linkbaocao,
  }
}
Edit()
{
  this._api.post('/api/Nhanvien/Capnhatbaocao',this.capnhatbaocao).subscribe(res => {
    if(res.success)
    {
     this.capnhatbaocao = res.data;
     setTimeout(() => {
       this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
     });
    
    }
   
    alert('Cập nhật thành công')
    this.LoadData();
  })
}
public loadData(pageSize:any) {
  this.pageSize = pageSize;
  this._route.params.subscribe(params => {
  this.id = params['id'];
   this._api.post('/api/Congviec/searchbaocao', { loc: this.loc, page: 1, pageSize: pageSize, Id: this.id}).subscribe(res => {
     this.list_item = res.data;
     this.totalItem = res.totalItem;
     setTimeout(() => {
      this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
    });
   });
  });
 }
}
