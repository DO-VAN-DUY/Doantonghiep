import { AfterViewInit, Component, Injector, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { BaseComponent } from 'src/app/core/common/base-component';
import { ApiService } from 'src/app/core/services/api.service';
import { UsersService } from 'src/app/core/services/users.service';
declare var $:any;
@Component({
  selector: 'app-tonhom',
  templateUrl: './tonhom.component.html',
  styleUrls: ['./tonhom.component.css']
})
export class TonhomComponent extends BaseComponent implements OnInit,AfterViewInit {
  @ViewChild('Formtonhom')
  Formtonhom:NgForm | undefined;
  filterBy:any;
  public loc:any;
  public page: any = 1;
  public id: any;
  public pageSize: any = 5;
  public totalItems: any;
  public list_item:any;
 public list_phongban:any;
  tonhom:any={
    idpb:"",
    tentn:"",
    trangthai:"",
  }

   isEdit: boolean=true;
  loading=false;
  currentUser: any;
 
  constructor( injector: Injector,private _api : ApiService,private _user:UsersService) {
    super(injector);
   }

  ngOnInit(): void {
    this._user.getUser().subscribe(res=>{
      this.currentUser = res;
    })
    this.loc = localStorage.getItem('loc') || '';
      this._route.params.subscribe(params => {
        this.id = params['id'];
        this._api.post('/api/Tonhom/search', { loc: this.loc, page: this.page, pageSize: this.pageSize, Id: this.id }).subscribe(res => {
          this.list_item = res.data;
          this.totalItems = res.totalItems;
         
        });
  
      });
  
    this._api.get('/api/Tonhom/hienthi').subscribe(res => {
      this.list_item = res;
      //debugger;
    });
    this._api.get('/api/Phongban/hienthi').subscribe(res => {
      this.list_phongban = res;
      //debugger;
    });
  }
  public LoadData() {
  
 
    this._api.post('/api/Tonhom/search', {page: 1, pageSize: 5, tentn:this.tonhom.tentn}).subscribe(res => {
      this.list_item = res.data;
      this.totalItems = res.totalItems;
      setTimeout(() => {
       this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
     });
    });
  }
  tonhoms()
  {
  }
  ngAfterViewInit() {  
   }
   openModel(isNew: any,index:any)
   {
    $('#largeModal').modal("show");
        if(isNew)
        {
          this.isEdit=false;
          this.tonhom={
            Id:0,
            idpb:"",
            tentn:"",
            trangthai:"",
           
          }
        }
        else
        {
          this.isEdit=true;
          this.tonhom=index;
        
        }
   
   }
   chinhanhs()
   {
    
   }
   
   public DeleteModel(index:any) {
    if (confirm("Bạn muốn xóa tổ nhóm này!")) {
      this._api.get('/api/Tonhom/Xoatonhom?id='+ index).subscribe(res => {
        alert('Xóa dữ liệu thành công');
        this.LoadData();
      });  
  }
  else
       {
        
       }
}
   public closeModalsss() {
    $('#largeModal').closest('.modal').modal('hide');
  }
   public loadPage(page: any) {
    this._api.post('/api/Tonhom/search', {loc: this.loc, page: this.page, pageSize: this.pageSize, id: this.id }).subscribe(res => {
      this.list_item = res.data;
      this.totalItems = res.totalItems;
      setTimeout(() => {
        this.loadScripts('assets/js/hide_menu.js', 'assets/js/slide_show.js');
      });
    });
  }
   addtonhom()
   {
    if(this.tonhom.idpb=""||this.tonhom.tentn=="")
       {
         this.loading=false;
         alert('Vui lòng nhập thông tin đầy đủ');
         return;
       }
       else
       {
         this.loading=true;
         var x=this.tonhom;
         this._api.post('/api/Tonhom/themtonhom',x).subscribe(res => {
           //var res:any=result;
          if(res.success)
          {
           this.tonhom = res.data;
           this.isEdit=true;
           debugger;
           setTimeout(() => {
             this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
           });
           
          }
          alert('Thêm thành công');
          this.LoadData();
       })
    
     
      }
   
  }
  Edittonhom()
  {
   var x=this.tonhom;
   this._api.post('/api/Tonhom/Suatonhom',x).subscribe(res => {
    if(res.success)
    {
     this.tonhom = res.data;
     this.isEdit=true;
   
     setTimeout(() => {
      this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
    });
    }
   
    alert('Sửa thành công');
    this.LoadData();
   
  }
 )}
 public loadData(pageSize:any) {
  this.pageSize = pageSize;
  this._route.params.subscribe(params => {
  this.id = params['id'];
   this._api.post('/api/Tonhom/search', { loc: this.loc, page: 1, pageSize: pageSize, Id: this.id }).subscribe(res => {
     this.list_item = res.data;
     this.totalItems = res.totalItems;
   
     
     setTimeout(() => {
      this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
    });
   });
  });
 }
}
