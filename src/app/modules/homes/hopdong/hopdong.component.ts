import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { BaseComponent } from 'src/app/core/common/base-component';
import { ApiService } from 'src/app/core/services/api.service';
import { UsersService } from 'src/app/core/services/users.service';
declare var $:any;
@Component({
  selector: 'app-hopdong',
  templateUrl: './hopdong.component.html',
  styleUrls: ['./hopdong.component.css']
})
export class HopdongComponent extends BaseComponent implements OnInit {
  @ViewChild('Formhopdong')
  Formhopdong:NgForm | undefined;
  public loc:any;
  public page: any = 1;
  public id: any;
  public pageSize: any = 8;
  public totalItem: any;
  list_itemnv:any;
  list_LoaiHD:any;
  // count: number = 0;
  // tableSize: number = 10;
  // tableSizes: any = [3, 6, 9, 12];
 public list_timkiem:any;
     filterBy: any;
     currentUser:any;
    public list_item:any;
    public tt= 1;
    loading=false;
    list_bl:any;
    hopdong:any={
      manv:"",
   
      maLHD:"",
      soHD:"",       
      trangthai:"",
      ngayky:"",
      ngayhieuluc:"",   
      ngayhethan:"",
      luuythue: "",
      masothue: "",
      phanloai:""
    }
    isEdit: boolean=true;
  list_nv: any;
  
  //public frmSearch: FormGroup;
 
    constructor( injector: Injector,private _api : ApiService, private fb:FormBuilder,private _user:UsersService) {
      super(injector);
    
     }
    //  loginForm: any;
    ngOnInit(): void {
      this._user.getUser().subscribe(res=>{
        this.currentUser = res;
        this.loc = localStorage.getItem('loc') || '';
      this._route.params.subscribe(params => {
        this.id = params['id'];
        this._api.post('/api/Hopdong/search', { loc: this.loc, page: this.page, pageSize: this.pageSize, Id: this.id }).subscribe(res => {
          this.list_item = res.data;
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
      for(let tt=1; tt<=10; tt++){
        this.tt;
      }
     
      this._api.get('/api/Hopdong/GetDatabAllLoaiHopdong').subscribe(res => {
        this.list_LoaiHD = res;
        
        this.list_LoaiHD = [...this.list_LoaiHD];
      });
      this._api.get('/api/Hopdong/GetDatabAllHopdong').subscribe(res => {
        this.list_item = res;
        
        this.list_item = [...this.list_item];
        
      });
      
      this._api.get('/api/Nhanvien/hienthi').subscribe(res => {
        this.list_itemnv = res;
     
       
      });
     
    }
    public LoadData() {
      this._api.post('/api/Hopdong/search', {page: 1, pageSize: 10, phanloai:this.hopdong.phanloai}).subscribe(res => {
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
      this._api.post('/api/Hopdong/search', {loc: this.loc,  page: page, pageSize: this.pageSize, Id: this.id }).subscribe(res => {
        this.list_item = res.data;
        this.totalItem = res.totalItems;
        setTimeout(() => {
          this.loadScripts('assets/js/hide_menu.js', 'assets/js/slide_show.js');
        });
      });
    }
    // pageChanged(event:any){
    //   this.loadPage.currentPage = event;
    // }
   
    filter() {
      if(this.filterBy!="")
      this.list_item = [...this.list_item.filter(((it: { tencn: string | any[]; }) => it.tencn.includes(this.filterBy)))];
      // this.list_item=[...this.list_item.filter(((it: { email: string | any[]; }) => it.email.includes(this.filterBy)))];
      else
      {
        this._api.get('/api/Hopdong/GetDatabAllHopdong').subscribe(res => {
          this.list_item = res;
        });
      } 
    }
    hopdongs()
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
            this.hopdong={
              manv:"",
            
              maLHD:"",
              soHD:"",      
              trangthai:"",
              ngayky:"",
              ngayhieuluc:"",           
              ngayhethan:"",
              luuythue: "",
              masothue: "",
              phanloai:""
            }
          }
          else
          {
            this.isEdit=true;
            this.hopdong=index; 
            var ngayky= this.formatDate(new Date( this.hopdong.ngayky));
            var ngayhieuluc= this.formatDate(new Date( this.hopdong.ngayhieuluc));
            var ngayhethan= this.formatDate(new Date( this.hopdong.ngayhethan));
            this.hopdong={
             'id': this.hopdong.id,
             "manv":this.hopdong.manv,
             "maLHD" :this.hopdong.maLHD,
              "soHD":this.hopdong.soHD,      
              "trangthai":this.hopdong.trangthai,
              "ngayky":ngayky,
              "ngayhieuluc":ngayhieuluc,           
              "ngayhethan":ngayhethan,
              "luuythue": this.hopdong.luuythue,
              "masothue": this.hopdong.masothue,
              "phanloai":this.hopdong.phanloai
            }
          }
       setTimeout(() => {
        this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
      });
     }
     
  
     public DeleteModel(index:any) {
      if (confirm("Bạn muốn xóa hợp đồng này!")) {
        this._api.get('/api/Hopdong/DeleteHopdong?id='+ index).subscribe(res => {
          alert('Xóa dữ liệu thành công');
          this.LoadData();
        });  
    }
     }
  
     addhopdong()
     {
      if(!this.Formhopdong?.valid)
      {
        this.loading=false;
        alert('Vui lòng nhập thông tin đầy đủ');
        return;
      }
      else
      {
        this.isEdit=true;
        var x=this.hopdong;
      this._api.post('/api/Hopdong/CreateHopdong',x).subscribe(res => {
        //var res:any=result;
       if(res.success)
       {
        this.hopdong = res.data;
        console.log(this.hopdong);
        
        this.loading=true;
        setTimeout(() => {
          this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
        });
        
       }
       alert('Thêm thành công');
       this.LoadData();
      }
     
    )}
     
    };
    Edithopdong()
    {
     var x=this.hopdong;
     this._api.post('/api/Hopdong/UpdateHopdong',x).subscribe(res => {
      if(res.success)
      {
       this.hopdong = res.data;
       this.isEdit=true;
       setTimeout(() => {
        this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
      });
      }
      debugger;
      alert('Sửa thành công');
      this.LoadData();
    }
   )}
   //so trang,ban ghi 1 trang,Tong ban ghi
   public loadData(pageSize:any) {
    this.pageSize = pageSize;
    this._route.params.subscribe(params => {
    this.id = params['id'];
     this._api.post('/api/Hopdong/search', { loc: this.loc, page: 1, pageSize: this.pageSize, Id: this.id }).subscribe(res => {
       this.list_item = res.data;
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

