import { AfterViewInit, Component, Injector, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BaseComponent } from 'src/app/core/common/base-component';
import { ApiService } from 'src/app/core/services/api.service';
import { UsersService } from 'src/app/core/services/users.service';
declare var $:any;
@Component({
  selector: 'app-phongban',
  templateUrl: './phongban.component.html',
  styleUrls: ['./phongban.component.css']
})

export class PhongbanComponent extends BaseComponent implements OnInit,AfterViewInit {
  @ViewChild('Formphongban')
  Formphongban:NgForm | undefined;
  public list_item:any;
  public list_chinhanh:any;
  public loc:any;
  public page: any = 1;
  public id: any;
  public pageSize: any = 10;
  public totalItem: any;
  loading=true;
  filterBy: any;
  phongban:any={
    id:"",
    idcn:"",
    tenpb:"",
    sdtpb:"",
    trangthai:"",
  
  }

   isEdit: boolean=true;
  currentUser: any;

  constructor( injector: Injector,private _api : ApiService,private _user:UsersService) {
    super(injector);
   }

  ngOnInit(): void {
  
    this.totalItem =1;
  
    this._user.getUser().subscribe(res=>{
      this.currentUser = res;
    })
    this._api.get('/api/Phongban/hienthi').subscribe(res => {
      this.list_item = res;
      //debugger;
    });
    this._api.get('/api/chinhanh/hienthi').subscribe(res => {
      this.list_chinhanh = res;
    });
    // this.loc = localStorage.getItem('loc') || '';
    // this._route.params.subscribe(params => {
    //   this.id = params['id'];
    //   this._api.post('/api/Phongban/search', { loc: this.loc, page: this.page, pageSize: this.pageSize, Id: this.id }).subscribe(res => {
    //     this.list_item = res.data;
    //     this.totalItem = res.totalItems;
    //     setTimeout(() => {
    //       this.loadScripts('assets/js/hide_menu.js', 'assets/js/slide_show.js');
    //     });
    //   });

    // });
  }
  public loadPage(page: any) {
    this._api.post('/api/Phongban/search', {loc: this.loc, page: this.page, pageSize: this.pageSize, Id: this.id }).subscribe(res => {
      this.list_item = res.data;
      this.totalItem = res.totalItems;
      setTimeout(() => {
        this.loadScripts('assets/js/hide_menu.js', 'assets/js/slide_show.js');
      });
    });
  }
  public LoadData() {
  
 
    this._api.post('/api/Phongban/search', {page: 1, pageSize: 7, tenpb:this.phongban.tenpb}).subscribe(res => {
      this.list_item = res.data;
      this.totalItem = res.totalItems;
      setTimeout(() => {
       this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
     });
    });
  }
  ngAfterViewInit() {  
   }
   openModel(isNew: any,index:any)
   {
    $('#largeModal').modal("show");
        if(isNew)
        {
          this.isEdit=false;
          this.phongban={
            Id:"",
            idcn:"",
            tenpb:"",
            sdtpb:"",
            trangthai:"",
          }
        }
        else
        {
          this.isEdit=true;
          this.phongban=index;
        
        }
   
   }
   
  public DeleteModel(index:any) {
    if (confirm("Bạn muốn xóa phòng ban này!")) {
      this._api.get('/api/Phongban/Xoaphongban?id='+ index).subscribe(res => {
        alert('Xóa dữ liệu thành công');
        this.LoadData();
      });  
  }
  else
       {
        
       }
}
   phongbans()
   { 
   }
   
   addphongban()
   {
    if(this.phongban.idcn==""||this.phongban.tenpb==""||this.phongban.sdt==""||this.phongban.trangthai=="")
    {
      this.loading=false;
      alert('Vui lòng nhập thông tin đầy đủ');
      return;
    }
    else
    {
      this.loading=true;
       this._api.post('/api/Phongban/themphongban',this.phongban).subscribe(res => {
         //var res:any=result;
        if(res.success)
        {
         this.phongban = res.data;
         this.isEdit=true;
        
         setTimeout(() => {
          this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
        });
         
        }
        alert('Thêm thành công');
        this.LoadData();
       
      })
    }
  
      
  }
  public closeModalsss() {
    $('#largeModal').closest('.modal').modal('hide');
  }
  Editphongban()
  {
   var x=this.phongban;
   this._api.post('/api/Phongban/Suaphongban',x).subscribe(res => {
    if(res.success)
    {
     this.phongban = res.data;
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
   this._api.post('/api/Phongban/search', { loc: this.loc, page: 1, pageSize: pageSize, Id: this.id }).subscribe(res => {
     this.list_item = res.data;
     this.totalItem = res.totalItems;
     setTimeout(() => {
      this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
    });
   });
  });
 }
 
}
