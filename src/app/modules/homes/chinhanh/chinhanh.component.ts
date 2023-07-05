import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { BaseComponent } from 'src/app/core/common/base-component';
import { ApiService } from 'src/app/core/services/api.service';
import { UsersService } from 'src/app/core/services/users.service';



declare var $:any;
@Component({
  selector: 'app-chinhanh',
  templateUrl: './chinhanh.component.html',
  styleUrls: ['./chinhanh.component.css']
})
export class ChinhanhComponent extends BaseComponent implements OnInit{
  @ViewChild('Formchinhanh')
  Formchinhanh:NgForm | undefined;
  public loc:any;
  public page: any = 1;
  public id: any;
  public pageSize: any=10;
  public totalItem: any;
  // count: number = 0;
  // tableSize: number = 10;
  // tableSizes: any = [3, 6, 9, 12];
 public list_timkiem:any;
     filterBy: any;
     currentUser:any;
    public list_item:any;
    public tt= 1;
    loading=false;
   
    chinhanh:any={
     
      tencn:"",
      diachi:"",
      email:"",
      sdt:""
    
    }
     isEdit: boolean=true;
  
  
 
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
    
      this.loc = localStorage.getItem('loc') || '';
      this._route.params.subscribe(params => {
        this.id = params['id'];
        this._api.post('/api/Chinhanh/searchs', { loc: this.loc, page: this.page, pageSize: this.pageSize, Id: this.id }).subscribe(res => {
          this.list_item = res.data;
          this.totalItem = res.totalItems;
          setTimeout(() => {
            this.loadScripts('assets/js/hide_menu.js', 'assets/js/slide_show.js');
          });
        });
 
  
      });
     
      // for(let tt=1; tt<=10; tt++){
      //   this.tt;
      // }
      // this._api.get('/api/chinhanh/hienthi').subscribe(res => {
      //   this.list_item = res;
        
      //   this.list_item = [...this.list_item];
      // });
      
    }
   
    public closeModal() {
      $('#largeModal').closest('.modal').modal('hide');
    }
    public loadPage(page: any) {
      this._api.post('/api/Chinhanh/searchs', {loc: this.loc,  page: page, pageSize: this.pageSize, Id: this.id }).subscribe(res => {
        this.list_item = res.data;
        this.totalItem = res.totalItems;
        setTimeout(() => {
          this.loadScripts('assets/js/hide_menu.js', 'assets/js/slide_show.js');
        });
      });
    }
    public LoadData() {
      this._api.post('/api/Chinhanh/searchs', {page: 1, pageSize: 10, tecn:this.chinhanh.tencn}).subscribe(res => {
        this.list_item = res.data;
        this.totalItem = res.totalItems;
        setTimeout(() => {
         this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
       });
      });
    }
  
    chinhanhs()
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
            this.chinhanh={
             
                tencn:"",
                diachi:"",
                email:"",
                sdt:"" 
            }
          }
          else
          {
            this.isEdit=true;
            this.chinhanh=index;
          
          }
     
       setTimeout(() => {
        this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
      });
     }
     public DeleteModel(index:any) {
      if (confirm("Bạn muốn xóa chi nhánh này!")) {
        console.log(index);
        this._api.get('/api/Chinhanh/Xoachinhanh?id='+ index).subscribe(res => {
          alert('Xóa dữ liệu thành công');
          this.LoadData();
        });  
       }
       else
       {
        
       }
     }


   
     addchinhanh()
     {
      if(this.chinhanh.tencn=="" || this.chinhanh.diachi==""||this.chinhanh.email==""||this.chinhanh.sdt=="")
      {
       
        alert('Vui lòng nhập thông tin đầy đủ');
        return;
      }
      else
      {
       
        var x=this.chinhanh;
     
      this._api.post('/api/chinhanh/themchinhanh',x).subscribe(res => {
        //var res:any=result;
       if(res.success)
       {
        this.chinhanh = res.data;
       
        
        this.loading=true;
        setTimeout(() => {
          this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
        });
        
       }
       alert('Thêm thành công');
       this.LoadData();
      }
     
    )
  }
     
    };
    Editchinhanh()
    {
     var x=this.chinhanh;
     this._api.post('/api/chinhanh/Suachinhanh',x).subscribe(res => {
      if(res.success)
      {
       this.chinhanh = res.data;
      
       this.isEdit=true;
   
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
     this._api.post('/api/Chinhanh/searchs', { loc: this.loc, page: 1, pageSize: this.pageSize, Id: this.id }).subscribe(res => {
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