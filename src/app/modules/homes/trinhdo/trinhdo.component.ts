import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { BaseComponent } from 'src/app/core/common/base-component';
import { ApiService } from 'src/app/core/services/api.service';
import { UsersService } from 'src/app/core/services/users.service';
declare var $:any;
@Component({
  selector: 'app-trinhdo',
  templateUrl: './trinhdo.component.html',
  styleUrls: ['./trinhdo.component.css']
})
export class TrinhdoComponent extends BaseComponent implements OnInit {
  @ViewChild('Formtrinhdo')
  Formtrinhdo:NgForm | undefined;
  public loc:any;
  public page: any = 1;
  public id: any;
  public pageSize: any = 8;
  public totalItem: any;
  list_itemnv:any;
 
 public list_timkiem:any;
     filterBy: any;
     currentUser:any;
    public list_item:any;
    public tt= 1;
    loading=false;
    list_bl:any;
    trinhdo:any={
      idnv:"",
      hocham:"",       
      hocvi:"",
      chuyennganh:"",
      chuyenmon:"",
      ngoaingu:""  ,
      tinhoc:"",
      vanbangkhac:"",
      ghichu:""
    }
    isEdit: boolean=true;
  
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
          this._api.post('/api/Trinhdo/search', { loc: this.loc, page: this.page, pageSize: this.pageSize, Id: this.id }).subscribe(res => {
            this.list_item = res.data;
            this.totalItem = res.totalItems;
            setTimeout(() => {
              this.loadScripts('assets/js/hide_menu.js', 'assets/js/slide_show.js');
            });
          });
   
    
        });
      this.LoadData();
      })
      setTimeout(() => {
        this.loadScripts('assets/js/hide_menu.js', 'assets/js/slide_show.js');
      });  
      for(let tt=1; tt<=10; tt++){
        this.tt;
      }
      this._api.get('/api/Nhanvien/hienthi').subscribe(res => {
        this.list_itemnv = res;
        setTimeout(() => {
          this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
        });
      });
     
      this._api.get('/api/Trinhdo/GetAllTrinhdo').subscribe(res => {
        this.list_item = res;
        
        this.list_item = [...this.list_item];
      });
      
    }
    public LoadData() {
      this._api.post('/api/Trinhdo/search', {page: 1, pageSize: 10, hocham:this.trinhdo.hocham}).subscribe(res => {
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
      this._api.post('/api/Trinhdo/search', {loc: this.loc,  page: page, pageSize: this.pageSize, Id: this.id }).subscribe(res => {
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
        this._api.get('/api/Trinhdo/GetAllTrinhdo').subscribe(res => {
          this.list_item = res;
        });
      } 
    }
    trinhdos()
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
            this.trinhdo={
              idnv:"",
              hocham:"",       
              hocvi:"",
              chuyennganh:"",
              chuyenmon:"",
              ngoaingu:""  ,
              tinhoc:"",
              vanbangkhac:"",
              ghichu:""
            }
          }
          else
          {
            this.isEdit=true;
            this.trinhdo=index; 
          
          }
       setTimeout(() => {
        this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
      });
     }
     public DeleteModel(index:any) {
      if (confirm("Bạn muốn xóa hợp đồng này!")) {
        this._api.get('/api/Trinhdo/DeleteTrinhdo?id='+ index).subscribe(res => {
          alert('Xóa dữ liệu thành công');
          this.LoadData();
        });  
    }
     }
     addtrinhdo()
     {
      if(!this.Formtrinhdo?.valid)
      {
        this.loading=false;
        alert('Vui lòng nhập thông tin đầy đủ');
        return;
      }
      else
      {
        this.isEdit=true;
        var x=this.trinhdo;
      this._api.post('/api/Trinhdo/CreateTrinhdo',x).subscribe(res => {
        //var res:any=result;
       if(res.success)
       {
        this.trinhdo = res.data;
        console.log(this.trinhdo);
        
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
    Edittrinhdo()
    {
     var x=this.trinhdo;
     this._api.post('/api/Trinhdo/UpdateTrinhdo',x).subscribe(res => {
      if(res.success)
      {
       this.trinhdo = res.data;
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
   public loadData(pageSize:any) {
    this.pageSize = pageSize;
    this._route.params.subscribe(params => {
    this.id = params['id'];
     this._api.post('/api/Trinhdo/search', { loc: this.loc, page: 1, pageSize: this.pageSize, Id: this.id }).subscribe(res => {
       this.list_item = res.data;
       this.totalItem = res.totalItems;
       setTimeout(() => {
        this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
      });
     });
    });
   }
   //so trang,ban ghi 1 trang,Tong ban ghi
 
 
  //  setDieuKienLoc(loc: any) {
  //    this.loc = loc;
  //    localStorage.setItem('loc',loc); 
  //    this.loadData(this.pageSize);
  //  }
}

