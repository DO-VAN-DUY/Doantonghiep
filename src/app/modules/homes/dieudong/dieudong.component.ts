import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { BaseComponent } from 'src/app/core/common/base-component';
import { ApiService } from 'src/app/core/services/api.service';
import { UsersService } from 'src/app/core/services/users.service';

declare var $:any;
@Component({
  selector: 'app-dieudong',
  templateUrl: './dieudong.component.html',
  styleUrls: ['./dieudong.component.css']
})
export class DieudongComponent extends BaseComponent implements OnInit{
  @ViewChild('Formdieudong')
  Formdieudong:NgForm | undefined;
  public loc:any;
  public page: any = 1;
  public id: any;
  public pageSize: any=8;
  public totalItem: any;

 public list_timkiem:any;
     filterBy: any;
     currentUser:any;
    public list_dieudong:any;
    public tt= 1;
    loading=false;
   
  dieudong: any={};
  dieudongss:any;
  list_item: any;
 
    constructor( injector: Injector,private _api : ApiService, private fb:FormBuilder,private _user:UsersService) {
      super(injector);
    
     }
   
    ngOnInit(): void {
      this._user.getUser().subscribe(res=>{
        this.currentUser = res;
        this.loc = localStorage.getItem('loc') || '';
        this._route.params.subscribe(params => {
          this.id = params['id'];
          this._api.post('/api/Phongban/searchsss', { loc: this.loc, page: this.page, pageSize: this.pageSize, Id: this.id }).subscribe(res => {
            this.list_dieudong = res.data;
            this.totalItem = res.totalItems;
            setTimeout(() => {
              this.loadScripts('assets/js/hide_menu.js', 'assets/js/slide_show.js');
            });
          });
   
    
        });
      })
      setTimeout(() => {
        this.loadScripts('assets/js/hide_menu.js', 'assets/js/slide_show.js');
      });
    
      this.loc = localStorage.getItem('loc') || '';
     
      for(let tt=1; tt<=10; tt++){
        this.tt;
      }
      this._api.get('/api/Phucap/GetallLSDD').subscribe(res => {
        this.list_dieudong = res;
        this.list_dieudong = [...this.list_dieudong];
      
        //console.log(this.list_miennhiem[0].idnv);
      });
      
    }
    public LoadData() {
      this._api.post('/api/Phongban/searchsss', {page: 1, pageSize: 10, hoten:this.dieudong.hoten}).subscribe(res => {
        this.list_item = res.data;
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
      this._api.post('/api/Phongban/searchsss', {loc: this.loc,  page: page, pageSize: this.pageSize, Id: this.id }).subscribe(res => {
        this.list_dieudong = res.data;
        this.totalItem = res.totalItems;
        setTimeout(() => {
          this.loadScripts('assets/js/hide_menu.js', 'assets/js/slide_show.js');
        });
      });
    }
    
    dieudongs()
    {
     
    }
  
    ngAfterViewInit() {  
     }
     
    openModel(index:any)
     {
      $('#largeModal').modal("show");
         
          
            this.dieudong=index;
            var ngaychuyen= this.formatDate(new Date( this.dieudong.ngaychuyen));
            var ngayhieuluc= this.formatDate(new Date( this.dieudong.ngayhieuluc));
            this.dieudong={
             'id': this.dieudong.id,
             "soQD":  this.dieudong.soQD,
             "hoten":this.dieudong.hoten,
             "idnv":  this.dieudong.idnv,
             "phongbancu":   this.dieudong.phongbancu,
             "phongbanmoi":  this.dieudong.phongbanmoi,
             "ngaychuyen": ngaychuyen,
             "ngayhieuluc": ngayhieuluc,
             "nguoiky":  this.dieudong.nguoiky,
         
            }
         
       setTimeout(() => {
        this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
      });
     }
     public DeleteModel(index:any) {
      if (confirm("Bạn muốn xóa điều động nhân viên này!")) {
        this._api.get('/api/Phucap/DeleteLSDD?id='+ index).subscribe(res => {
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
    Editdieudong()
    {
     var x=this.dieudong;
     this._api.post('/api/Phucap/updateLSDD',x).subscribe(res => {
      if(res.success)
      {
       this.dieudong = res.data;
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
     this._api.post('/api/Phongban/searchsss', { loc: this.loc, page: 1, pageSize: this.pageSize, Id: this.id }).subscribe(res => {
       this.list_dieudong = res.data;
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
