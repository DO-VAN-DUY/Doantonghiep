import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { BaseComponent } from 'src/app/core/common/base-component';
import { ApiService } from 'src/app/core/services/api.service';
import { UsersService } from 'src/app/core/services/users.service';

declare var $:any;
@Component({
  selector: 'app-miennhiem',
  templateUrl: './miennhiem.component.html',
  styleUrls: ['./miennhiem.component.css']
})
export class MiennhiemComponent extends BaseComponent implements OnInit{
  @ViewChild('Formmiennhiem')
  Formmiennhiem:NgForm | undefined;
  public loc:any;
  public page: any = 1;
  public id: any;
  public pageSize: any=8;
  public totalItem: any;

 public list_timkiem:any;
     filterBy: any;
     currentUser:any;
    public list_miennhiem:any;
    public tt= 1;
    loading=false;
   
  miennhiem: any={};
  miennhiemss:any;
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
        this._api.post('/api/Times/searchss', { loc: this.loc, page: this.page, pageSize: this.pageSize, Id: this.id }).subscribe(res => {
          this.list_miennhiem = res.data;
          this.totalItem = res.totalItems;
          setTimeout(() => {
            this.loadScripts('assets/js/hide_menu.js', 'assets/js/slide_show.js');
          });
        });
      });
     
      for(let tt=1; tt<=10; tt++){
        this.tt;
      }
      this._api.get('/api/Tonhom/hienthiMN').subscribe(res => {
        this.list_miennhiem = res;
        this.list_miennhiem = [...this.list_miennhiem];
        this._api.get('/api/Nhanvien/hienthi').subscribe(res => {
          this.list_item = res;
          setTimeout(() => {
            this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
          });
        });
        //console.log(this.list_miennhiem[0].idnv);
      });
      
    }
    // public LoadTimkiem()
    // {
    //  // this._api.post('/api/Chinhanh/searchs',)
    //   this._api.post('/api/Chinhanh/searchs', {page: 1, pageSize: 5,tencn:this.frmSearch.value['txt_tencn']}).subscribe(res => {
    //     this.list_timkiem = res.data;
       
    //   });
     
    // }
    public LoadData() {
      this._api.post('/api/Times/searchss', {page: 1, pageSize: 10, hoten:this.miennhiem.hoten}).subscribe(res => {
        this.list_item = res.data;
        this.totalItem = res.totalItems;
        setTimeout(() => {
         this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
       });
      });
    }
    public closeModal() {
      $('#largeModalmn').closest('.modal').modal('hide');
    }
    public loadPage(page: any) {
      this._api.post('/api/Times/searchss', {loc: this.loc,  page: page, pageSize: this.pageSize, Id: this.id }).subscribe(res => {
        this.list_miennhiem = res.data;
        this.totalItem = res.totalItems;
        setTimeout(() => {
          this.loadScripts('assets/js/hide_menu.js', 'assets/js/slide_show.js');
        });
      });
    }
    // pageChanged(event:any){
    //   this.loadPage.currentPage = event;
    // }
   
    // filter() {
    //   if(this.filterBy!="")
    //   this.list_item = [...this.list_item.filter(((it: { tencn: string | any[]; }) => it.tencn.includes(this.filterBy)))];
    //   // this.list_item=[...this.list_item.filter(((it: { email: string | any[]; }) => it.email.includes(this.filterBy)))];
    //   else
    //   {
    //     this._api.get('/api/chinhanh/hienthi').subscribe(res => {
    //       this.list_item = res;
    //     });
    //   } 
    // }
    miennhiems()
    {
      
    }
  
    ngAfterViewInit() {  
     }
     
    openModel(index:any)
     {
      $('#largeModalmn').modal("show");
         
          
            this.miennhiem=index;
            var ngaychuyen= this.formatDate(new Date( this.miennhiem.ngaychuyen));
            var ngayhieuluc= this.formatDate(new Date( this.miennhiem.ngayhieuluc));
            this.miennhiem={
             'id': this.miennhiem.id,
             "hoten":this.miennhiem.hoten,
             "soQD":  this.miennhiem.soQD,
             "idnv":  this.miennhiem.idnv,
             "chucvucu":   this.miennhiem.chucvucu,
             "chucvumoi":  this.miennhiem.chucvumoi,
             "ngaychuyen": ngaychuyen,
             "ngayhieuluc": ngayhieuluc,
             "nguoiky":  this.miennhiem.nguoiky,
         
            }
         
       setTimeout(() => {
        this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
      });
     }
     public DeleteModel(index:any) {
      if (confirm("Bạn muốn xóa miễn nhiệm nhân viên này!")) {
        this._api.get('/api/Tonhom/Xoamiennhiem?id='+ index).subscribe(res => {
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
    Editmiennhiem()
    {
     var x=this.miennhiem;
     this._api.post('/api/Tonhom/UpdateMN',x).subscribe(res => {
      if(res.success)
      {
       this.miennhiem = res.data;
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
     this._api.post('/api/Times/searchss', { loc: this.loc, page: 1, pageSize: this.pageSize, Id: this.id }).subscribe(res => {
       this.list_miennhiem = res.data;
       this.totalItem = res.totalItems;
       setTimeout(() => {
        this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
      });
     });
    });
   }
   
  }
