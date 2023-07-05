import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { BaseComponent } from 'src/app/core/common/base-component';
import { ApiService } from 'src/app/core/services/api.service';
import { UsersService } from 'src/app/core/services/users.service';
declare var $:any;
@Component({
  selector: 'app-bacluong',
  templateUrl: './bacluong.component.html',
  styleUrls: ['./bacluong.component.css']
})
export class BacluongComponent extends BaseComponent implements OnInit {
  @ViewChild('Formbacluong')
  Formbacluong:NgForm | undefined;
  public loc:any;
  public page: any = 1;
  public id: any;
  public pageSize: any = 10;
  public totalItem: any;
  list_itemnv:any;
  // count: number = 0;
  // tableSize: number = 10;
  // tableSizes: any = [3, 6, 9, 12];
 public list_timkiem:any;
     filterBy: any;
     currentUser:any;
    public list_item:any;
    public tt= 1;
    loading=false;
   
    bac:any={
      idnv:"",
      hesoluong:"",
      heso2:"",
      bacluong:"",
      ngayky:"",
      ngayhieuluc:""
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
      this._api.get('/api/Bacluong/hienthi').subscribe(res => {
        this.list_item = res;
        
        this.list_item = [...this.list_item];
      });
      this.loc = localStorage.getItem('loc') || '';
      this._route.params.subscribe(params => {
        this.id = params['id'];
        this._api.post('/api/Bacluong/searchs', { loc: this.loc, page: this.page, pageSize: this.pageSize, Id: this.id }).subscribe(res => {
          this.list_item = res.data;
          this.totalItem = res.totalItems;
          setTimeout(() => {
            this.loadScripts('assets/js/hide_menu.js', 'assets/js/slide_show.js');
          });
        });
  
      });
    }
  
    public closeModal() {
      $('#largeModal').closest('.modal').modal('hide');
    }
    public loadPage(page: any) {
      this._api.post('/api/Bacluong/searchs', {loc: this.loc,  page: page, pageSize: this.pageSize, Id: this.id }).subscribe(res => {
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
    public loadData(pageSize:any) {
      this.pageSize = pageSize;
      this._route.params.subscribe(params => {
      this.id = params['id'];
       this._api.post('/api/Bacluong/searchs', { loc: this.loc, page: 1, pageSize: pageSize, Id: this.id }).subscribe(res => {
         this.list_item = res.data;
         this.totalItem = res.totalItems;
         setTimeout(() => {
          this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
        });
       });
      });
     }
    
   
    filter() {
      if(this.filterBy!="")
      this.list_item = [...this.list_item.filter(((it: { tencn: string | any[]; }) => it.tencn.includes(this.filterBy)))];
      // this.list_item=[...this.list_item.filter(((it: { email: string | any[]; }) => it.email.includes(this.filterBy)))];
      else
      {
        this._api.get('/api/chinhanh/hienthi').subscribe(res => {
          this.list_item = res;
        });
      } 
    }
    bacluongs()
    {
      if(!this.Formbacluong?.valid)
        {
          this.loading=false;
          
          return;
        }
        else
        {
          this.loading=true;
       //  console.log(this.chinhanh.tencn);
        }
    }
    ngAfterViewInit() {  
     }
     
    openModel(isNew: any,index:any)
     {
      $('#largeModal').modal("show");
          if(isNew)
          {
            this.isEdit=false;
            this.bac={
              idnv:"",
              hesoluong:"",
              heso2:"",
              bacluong:"",
              ngayky:"",
              ngayhieuluc:""
            }
          }
          else
          {
            this.isEdit=true;
            this.bac=index;
          
          }
     
       setTimeout(() => {
        this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
      });
     }
     
    //  DeleteModel(it:any)
    //  {
    //   this._route.params.subscribe(params => {
    //     // let it = params['id'];
    //     this._api.get('/api/Chinhanh/Xoachinhanh/'+ it).subscribe(res => {
    //     this.list_item = res;
    //     debugger;

    //   });
    //   });
     
      
    //  }
     public DeleteModel(index:any) {
      if (confirm("Bạn muốn xóa bậc lương nhân viên này!")) {
        this._api.get('/api/Bacluong/Xoabacluong?id='+ index).subscribe(res => {
          alert('Xóa dữ liệu thành công');
        });  
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
     addbacluong()
     {
      if(!this.Formbacluong?.valid)
      {
        this.loading=false;
        alert('Vui lòng nhập thông tin đầy đủ');
        return;
      }
      else
      {
        this.isEdit=true;
        var x=this.bac;
      this._api.post('/api/Bacluong/thembacluong',x).subscribe(res => {
        //var res:any=result;
       if(res.success)
       {
        this.bac = res.data;
        console.log(this.bac);
        
        this.loading=true;
        setTimeout(() => {
          this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
        });
        
       }
       alert('Thêm thành công');
      }
     
    )}
     
    };
    Editbacluong()
    {
     var x=this.bac;
     this._api.post('/api/Bacluong/Suabacluong',x).subscribe(res => {
      if(res.success)
      {
       this.bac = res.data;
      
       this.isEdit=true;
   
       setTimeout(() => {
        this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
      });
      }
      debugger;
      alert('Sửa thành công');
     
    }
   )}
   //so trang,ban ghi 1 trang,Tong ban ghi
 
 
  //  setDieuKienLoc(loc: any) {
  //    this.loc = loc;
  //    localStorage.setItem('loc',loc); 
  //    this.loadData(this.pageSize);
  //  }
}
