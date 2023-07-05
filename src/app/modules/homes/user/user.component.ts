import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BaseComponent } from 'src/app/core/common/base-component';
import { ApiService } from 'src/app/core/services/api.service';
declare var $:any;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent extends BaseComponent implements OnInit {
  @ViewChild('Formtonhom')
  Formuser:NgForm | undefined;
  filterBy:any;
  public loc:any;
  public page: any = 1;
  public id: any;
  public pageSize: any = 8;
  public totalItem: any;
  public list_item:any;
  public list_nhanvien:any;
  model:any={
    name:"",
    email:"",
    sdt:"",
    diachi:"",
    gioitinh:"",
    taikhoan:"",
    password:"", 
    role:"Nhân viên",
    token:""
  }

  isEdit: boolean=true;
  loading=false;
  listjson_uss: {} | undefined;
  listjson_lltns: {} | undefined;
 
  constructor( injector: Injector,private _api : ApiService) {
    super(injector);
   }

  ngOnInit(): void {
    for(let tt=1; tt<=1000; tt++){
      tt++;
    }
    this._api.get('/api/User/get_all').subscribe(res => {
      this.list_item = res;
      
    });
    this.loc = localStorage.getItem('loc') || '';
      this._route.params.subscribe(params => {
        this.id = params['id'];
        this._api.post('/api/User/search', { loc: this.loc, page: this.page, pageSize: this.pageSize, Id: this.id }).subscribe(res => {
          this.list_item = res.data;
          this.totalItem = res.totalItems;
          setTimeout(() => {
            this.loadScripts('assets/js/hide_menu.js', 'assets/js/slide_show.js');
          });
        });
  
      });
  }
  public loadPage(page: any) {
    this._api.post('/api/User/search', {loc: this.loc,  page: page, pageSize: this.pageSize, Id: this.id }).subscribe(res => {
      this.list_item = res.data;
      this.totalItem = res.totalItems;
      setTimeout(() => {
        this.loadScripts('assets/js/hide_menu.js', 'assets/js/slide_show.js');
      });
    });
  }
  public closeModalsss() {
    $('#largeModal').closest('.modal').modal('hide');
  }
  public LoadData() {
  
 
    this._api.post('/api/User/search', {page: 1, pageSize: 8, name:this.model.name}).subscribe(res => {
      this.list_item = res.data;
      this.totalItem = res.totalItems;
      setTimeout(() => {
       this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
     });
    });
  }
  filter() {
    if(this.filterBy!="")
    this.list_item = [...this.list_item.filter(((it: { name: string | any[]; }) => it.name.includes(this.filterBy)))];
    // this.list_item=[...this.list_item.filter(((it: { email: string | any[]; }) => it.email.includes(this.filterBy)))];
    else
    {
      this._api.get('/api/Phongban/hienthi').subscribe(res => {
        this.list_item = res;
        //debugger;
      });
    } 
  }
  openModel(isNew: any,index:any)
  {
    $('#largeModal').modal("show");
       if(isNew)
       {
         this.isEdit=false;
         this.model={
           Id:"",
           name:"",
           email:"",
           sdt:"",
           diachi:"",
           gioitinh:"",
           taikhoan:"",
           password:"",
           role:"Nhân viên",
           token:""
         }
       }
       else
       {
         this.isEdit=true;
         this.model=index;
       
       }
  
  }
  public DeleteModel(index:any) {
    if (confirm("Bạn muốn xóa tài khoản này!")) {
      this._api.get('/api/User/delete_user?id='+ index).subscribe(res => {
        alert('Xóa dữ liệu thành công');
      });  
  }
}
  users()
  {
   
  }
  Adduser()
  {
  
        this.loading=true;
        if(this.model.name==""||this.model.email==""||this.model.sdt==""||this.model.diachi==""||this.model.gioitinh==""||this.model.taikhoan==""||this.model.password=="")
        {
          this.loading=false;
          alert('Vui lòng nhập thông tin đầy đủ')
          return;
        }
        else{ 
          var x=this.model;
          this._api.post('/api/User/create_user',x).subscribe(res => {
            //var res:any=result;
           if(res.success)
           {
            x = res.data;
            this.isEdit=true;
          
            setTimeout(() => {
              this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
            });
            
           }
           alert('Thêm thành công');
        })
        }
     
 } 
 Edituser()
 {
  var x=this.model;
  this._api.post('/api/User/update_user',x).subscribe(res => {
   if(res.success)
   {
    this.model = res.data;
    this.isEdit=true;
    setTimeout(() => {
      this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
    });
   
   }
  
   alert('Sửa thành công');
  
 }
)
}

public loadData(pageSize:any) {
  this.pageSize = pageSize;
  this._route.params.subscribe(params => {
  this.id = params['id'];
   this._api.post('/api/User/search', { loc: this.loc, page: 1, pageSize: pageSize, Id: this.id }).subscribe(res => {
     this.list_item = res.data;
     this.totalItem = res.totalItems;
     setTimeout(() => {
      this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
    });
   });
  });
 }

}
