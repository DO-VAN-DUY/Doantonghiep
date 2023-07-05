import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { BaseComponent } from 'src/app/core/common/base-component';
import { ApiService } from 'src/app/core/services/api.service';
import { UsersService } from 'src/app/core/services/users.service';

declare var $:any;
@Component({
  selector: 'app-bonhiem',
  templateUrl: './bonhiem.component.html',
  styleUrls: ['./bonhiem.component.css']
})
export class BonhiemComponent extends BaseComponent implements OnInit{
  @ViewChild('Formbonhiem')
  Formbonhiem:NgForm | undefined;
  public loc:any;
  public page: any = 1;
  public id: any;
  public pageSize: any=10;
  public totalItem: any;

 public list_timkiem:any;
     filterBy: any;
     currentUser:any;
    public list_bonhiem:any;
    public tt= 1;
    loading=false;
   
  bonhiem: any={};
 bonhiemss:any;
  list_item: any;
 
    constructor( injector: Injector,private _api : ApiService, private fb:FormBuilder,private _user:UsersService) {
      super(injector);
    
     }
   
    ngOnInit(): void {
      this._user.getUser().subscribe(res=>{
        this.currentUser = res;
      })
      setTimeout(() => {
        this.loadScripts('assets/js/hide_menu.js', 'assets/js/slide_show.js');
      });
    
      this.loc = localStorage.getItem('loc') || '';
      this._route.params.subscribe(params => {
        this.id = params['id'];
        this._api.post('/api/Trinhdo/searchs', { loc: this.loc, page: this.page, pageSize: this.pageSize, Id: this.id }).subscribe(res => {
          this.list_item = res.data;
          this.totalItem = res.totalItems;
          setTimeout(() => {
            this.loadScripts('assets/js/hide_menu.js', 'assets/js/slide_show.js');
          });
        });
 
  
      });
     
      for(let tt=1; tt<=10; tt++){
        this.tt;
      }
      this._api.get('/api/Tonhom/hienthiBN').subscribe(res => {
        this.list_bonhiem = res;
        this._api.get('/api/Nhanvien/hienthi').subscribe(res => {
          this.list_item = res;
          setTimeout(() => {
            this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
          });
        });
        this.list_bonhiem = [...this.list_bonhiem];
      });
      
    }
    public LoadData() {
      this._api.post('/api/Trinhdo/searchs', {page: 1, pageSize: 10, hoten:this.bonhiem.hoten}).subscribe(res => {
        this.list_bonhiem = res.data;
        this.totalItem = res.totalItems;
        setTimeout(() => {
         this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
       });
      });
    }
    public closeModal() {
      $('#largeModal').closest('.modal').modal('hide');
    }
    public loadPage(page: any) {
      this._api.post('/api/Trinhdo/searchs', {loc: this.loc,  page: page, pageSize: this.pageSize, Id: this.id }).subscribe(res => {
        this.list_bonhiem = res.data;
        this.totalItem = res.totalItems;
        setTimeout(() => {
          this.loadScripts('assets/js/hide_menu.js', 'assets/js/slide_show.js');
        });
      });
    }
   
    miennhiems()
    {
      
    }
  
    ngAfterViewInit() {  
     }
     
    openModel(index:any)
     {
      $('#largeModal').modal("show");
         
          
            this.bonhiem=index;
            var ngaychuyen= this.formatDate(new Date( this.bonhiem.ngaychuyen));
            var ngayhieuluc= this.formatDate(new Date( this.bonhiem.ngayhieuluc));
            this.bonhiem={
             'id': this.bonhiem.id,
             "soQD":  this.bonhiem.soQD,
             "idnv":  this.bonhiem.idnv,
             "hoten":this.bonhiem.hoten,
             "chucvucu":   this.bonhiem.chucvucu,
             "chucvumoi":  this.bonhiem.chucvumoi,
             "ngaychuyen": ngaychuyen,
             "ngayhieuluc": ngayhieuluc,
             "nguoiky":  this.bonhiem.nguoiky,
            }
         
       setTimeout(() => {
        this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
      });
     }
     public DeleteModel(index:any) {
      if (confirm("Bạn muốn xóa miễn nhiệm nhân viên này!")) {
        this._api.get('/api/Tonhom/Xoabonhiem?id='+ index).subscribe(res => {
          alert('Xóa dữ liệu thành công');
          this.LoadData();
        });  
       }
       else
       {
        
       }
     }


    //  search(keyword:string)
    //  {
    //   var x=this.chinhanh;
    //   this._api.get('/api/Chinhanh/search/'+ keyword).subscribe(res => {
    //     this.list_item = res;
    //     setTimeout(() => {
    //       this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
    //     });
    //   });
    //  }
    Editbonhiem()
    {
     var x=this.bonhiem;
     this._api.post('/api/Tonhom/UpdateMN',x).subscribe(res => {
      if(res.success)
      {
       this.bonhiem = res.data;
       setTimeout(() => {
        this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
      });
      }
      alert('Sửa thành công');
      this.LoadData();
    }
   )}
   //so trang,ban ghi 1 trang,Tong ban ghi
   public loadData(pageSize:any) {
    this.pageSize = pageSize;
    this._route.params.subscribe(params => {
    this.id = params['id'];
     this._api.post('/api/Trinhdo/searchs', { loc: this.loc, page: 1, pageSize: this.pageSize, Id: this.id }).subscribe(res => {
       this.list_bonhiem = res.data;
       this.totalItem = res.totalItems;
       setTimeout(() => {
        this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
      });
     });
    });
   }
 
  //  setDieuKienLoc(loc: any) {
  //    this.loc = loc;
  //    localStorage.setItem('loc',loc); 
  //    this.loadData(this.pageSize);
  //  }
   
  }
