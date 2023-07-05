import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BaseComponent } from 'src/app/core/common/base-component';
import { ApiService } from 'src/app/core/services/api.service';
import { UsersService } from 'src/app/core/services/users.service';
import * as XLSX from 'xlsx';
declare var $:any;
@Component({
  selector: 'app-luongthuong',
  templateUrl: './luongthuong.component.html',
  styleUrls: ['./luongthuong.component.css']
})
export class LuongthuongComponent  extends BaseComponent implements OnInit {
  @ViewChild('Formluong')
  Formluong:NgForm | undefined;
  public loc:any;
  public list_item:any;
  public list_items:any;
  public list_check:any;
  currentUser:any;
  indexs:any;
  LS:any;

  public page: any = 1;
  public id: any;
  public mapb: any;
  public matn: any;
  public pageSize: any=10;
  public totalItem: any;
  list_phucap: any;
  luongnv:any;
  list_phongban:any;
  list_tonhom:any;
  list_nhanvien: any;
  expression:boolean=true;
  isluong:boolean =true;
  luong: any= { idnv: "", ngayconghople: "", ngaycongkohople: "", ngaykhongduoctinh: "", thang: "", luongthang: "", thuong: "", phat: "", phucap: "", luongnhandc: "", nguoixuly: "" };
 updateluongnv:any={ idnv: "", ngayconghople: "", ngaycongkohople: "", ngaykhongduoctinh: "", thang: "", luongthang: "", thuong: "", phat: "", phucap: "", luongnhandc: "", nguoixuly: "" };;
  constructor( injector: Injector,private _api : ApiService,private _user:UsersService) {
    super(injector);
    
   }
Mapb()
{
 this.mapb={
  mapb:this.luong.mapb
 }
 this._api.get('/api/Tonhom/get_by_id_tonhom_phongban?idpb='+this.mapb.mapb).subscribe(res => {
  this.list_tonhom = res; 
});
}
Matn()
{
 this.matn={
  matn:this.luong.matn,
  idnv:this.luong.idnv
 }
 this._api.get('/api/Nhanvien/get_by_id_tonhom_nhanvien?matn='+this.matn.matn).subscribe(res => {
  this.list_nhanvien = res; 
});
}
  ngOnInit(): void {
  
    this._user.getUser().subscribe(res=>{
      this.currentUser = res;
    })
    this._api.get('/api/Luong/hienthi').subscribe(res => {
      this.luongnv = res ;
      const date= new Date();
      const checkthang=(date.getMonth() + 1);
     
      for( var index in this.luongnv )
      {
       if(this.luongnv[index].thang==checkthang)
       {
        this.isluong=false;
        this.LoadData();
       }
       else
       {
        this.isluong=true;
        this.LoadData();
       }
      }
      
    })
    this._api.get('/api/Phongban/hienthi').subscribe(res => {
      this.list_phongban = res;
      //debugger;
    });
    // this._api.get('/api/Tonhom/hienthi').subscribe(res => {
    //   this.list_tonhom = res;
    //   //debugger;
    // });
    this._api.get('/api/Nhanvien/hienthi').subscribe(res => {
      this.list_nhanvien = res;
    })
  
    this.loc = localStorage.getItem('loc') || '';
    this._route.params.subscribe(params => {
      this.id = params['id'];
     
     
      this._api.post('/api/Luong/search', { loc: this.loc, page: this.page, pageSize: this.pageSize, Id: this.id}).subscribe(res => {
        this.luongnv = res.data;
        this.totalItem = res.totalItems;
        setTimeout(() => {
          this.loadScripts('assets/js/hide_menu.js', 'assets/js/slide_show.js');
        });
      });
     });
  }
  public LoadData() {
    this._api.post('/api/Luong/search', { page: 1, pageSize: this.pageSize,idnv: this.matn.idnv,mapb:this.luong.mapb,matn:this.matn.matn}).subscribe(res => {
      this.luongnv = res.data;
      console.log(this.luongnv)
      setTimeout(() => {
        this.loadScripts(
        
        );
      });
    });
  }
  public loadPage(page: any) {
    this._api.post('/api/Luong/search', {loc: this.loc,  page: page, pageSize: this.pageSize, Id: this.id }).subscribe(res => {
      this.luongnv = res.data;
      this.totalItem = res.totalItems;
      setTimeout(() => {
        this.loadScripts('assets/js/hide_menu.js', 'assets/js/slide_show.js');
      });
    });
  }
 
  
  public closeModal() {
    $('#exampleModal').closest('.modal').modal('hide');
  }
  TKL(it:any)
  {
    $('#example').modal("show");
    this._api.get('/api/Luong/get_by_id?idnv='+it.idnv).subscribe(res => {
      this.list_check = res;
    })
  }
  Tluong(it:any)
  {
    var y= this.currentUser.id;
    var day=26; 
    var ngaykohople=0;
    var ngaykotinh=0;
    var thuong=0;
    var phat=0;
     const date= new Date();
     const checkthang=(date.getMonth() + 1);
    var ngayhople=0;

    this._api.get('/api/Kiemtra/Getkiemtra?idnv='+it).subscribe(res => {
      this.list_check = res;
    
      var test=this.list_check;

      for(var index in test)
      {      
        const ck=new Date(test[index].ngay).getMonth();
        const ckthang=ck + 1;
       if(ckthang == checkthang )
       {
        if(test[index].sogio>=8 && test[index].giovao!=""&& test[index].giora!="" )
        {
          ngayhople+=1;

         
        }
        if(test[index].sogio>=4 &&test[index].sogio<8 && test[index].giovao!=""&& test[index].giora!="" )
        {
          ngaykohople+=1;

         
        }
        if(test[index].sogio<4 && test[index].giovao!=""&& test[index].giora!="" )
        {
          ngaykotinh+=1;   
        }
       }  
      } 
           
        this._api.get('/api/Nhanvien/get_by_id_nvs?id='+it).subscribe(res => {
          this.list_items = res ;
       
          var luongtt= this.list_items;
          this._api.get('/api/Phucap/get_by_id_PC?idnv='+it).subscribe(res => {
            this.list_phucap = res; 
         
            var luonghl= ngayhople/day * luongtt.luongthoathuan;
            var luongkhl=((ngaykohople/(day-ngayhople) * luongtt.luongthoathuan)/2);
            var luongnd=luonghl+luongkhl+this.list_phucap.sotien+thuong-phat ;
          
            this.luong={

              idnv:it,
              matn:luongtt.idtn,
              mapb:luongtt.idpb,
              ngayconghople:ngayhople,
              ngaycongkohople:ngaykohople,
              ngaykhongduoctinh:ngaykotinh,
              thang:checkthang,
              luongthang:luongtt.luongthoathuan,
              thuong:thuong,
              phat:phat,
              phucap:this.list_phucap.sotien,
              luongnhandc:luongnd,
              nguoixuly:this.currentUser.name
            }
        
          
             this._api.post('/api/Luong/themluong',this.luong).subscribe(res=>
              {
                this.luong = res.data;
                this.LoadData();
              })
             
        })
       
      });
     
    
     })

  }

  fileName="Luongnhanvien.xlsx";
  public exportExcel():void
  {
    let element=document.getElementById('excel_table');
    const ws:XLSX.WorkSheet=XLSX.utils.table_to_sheet(element);
    const wb:XLSX.WorkBook=XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb,ws,'Sheet1');
    XLSX.writeFile(wb,this.fileName)
  }
  file="Luongthangnv.xlsx"
 public exportExcelLT():void
 {
  //lấy dữ liệu cần chuyển đổi
  let element=document.getElementById('excel_luongthang');
  //chuyển phần từ chuyển thành 1 trang tính theo tên của chính nó
    const ws:XLSX.WorkSheet=XLSX.utils.table_to_sheet(element);
    //tạo sổ làm việc
    const wb:XLSX.WorkBook=XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(wb,ws,'Sheet1');
    // ghi sổ lm việc mà chúng ta cần chuyển làm đối số dầu tiên sau đó là tên tệp
    XLSX.writeFile(wb,this.file)
 }
Tinhluong()
  {
    this._api.get('/api/Nhanvien/hienthi').subscribe(res => {
      this.list_nhanvien = res;
        for(var index in this.list_nhanvien)
        {
          this.list_nhanvien[index].id=this.Tluong(this.list_nhanvien[index].id);
          
        }
        this.LoadData();
       
    });
  }
 
  Update(index:any)
  {  
    $('#largeModal').modal("show");
    this.luong=index;
  }
  Updateluong()
  {
    var day=26; 
    
    this.updateluongnv={
      "Id":this.luong.id,
      "idnv":this.luong.idnv,
      "mapb":this.luong.mapb,
      "matn":this.luong.matn,
      "ngayconghople":this.luong.ngayconghople,
      "ngaycongkohople":this.luong.ngaycongkohople,
      "ngaykhongduoctinh":this.luong.ngaykhongduoctinh,
      "thang":this.luong.thang,
      "luongthang":this.luong.luongthang,
      "thuong":this.luong.thuong,
      "phat":this.luong.phat,
      "phucap":this.luong.phucap,
       "luongnhandc":((this.luong.ngayconghople/day * this.luong.luongthang)+((this.luong.ngaykhongduoctinh/(day-this.luong.ngayconghople-this.luong.ngaykhongduoctinh) * this.luong.luongthang)/2)+this.luong.phucap-this.luong.phat+this.luong.thuong),
      "nguoixuly":this.luong.nguoixuly
    }
  
      this._api.post('/api/Luong/Capnhatluong',this.updateluongnv).subscribe(res => {
        if(res.success)
        {
          this.updateluongnv = res.data;
         setTimeout(() => {
           this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
         });
        
        }
        alert('Cập nhật thành công')
        this.LoadData();
        
      })
     
  }
  Delete()
  {
    if (confirm("Bạn muốn toàn bộ lương nhân viên!")) {
      this._api.get('/api/Luong/Deleteluong').subscribe(res => {
        alert('Xóa dữ liệu thành công');
        this.isluong=true;
        this.LoadData();
      });  
  }
  }
  Xemchitiet(id:any)
  {

    $('#exampleModalCenter').modal("show");
    this._api.get('/api/Kiemtra/Getkiemtra?idnv='+id.idnv).subscribe(res => {
      this.LS = res;
    });
  }
  public loadData(pageSize:any) {
    this.pageSize = pageSize;
    this._route.params.subscribe(params => {
    this.id = params['id'];
   
     this._api.post('/api/Luong/search', { loc: this.loc, page: 1, pageSize: this.pageSize, Id: this.id}).subscribe(res => {
       this.luongnv = res.data;
       this.totalItem = res.totalItems;
       setTimeout(() => {
        this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
      });
     });
    });
   } 
  //  public loadDatas(pageSize:any) {
  //   this.pageSize = pageSize;
  //   this._route.params.subscribe(params => {
  //   this.id = params['id'];
  //    this._api.post('/api/Luong/search', { loc: this.loc, page: 1, pageSize: this.pageSize, Id: this.id }).subscribe(res => {
  //      this.luongnv = res.data;
  //      this.totalItem = res.totalItems;
  //      setTimeout(() => {
  //       this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
  //     });
  //    });
  //   });
  //  } 
  //  setDieuKienLoc(loc: any) {
  //   this.loc = loc;
  //   localStorage.setItem('loc',loc); 
  //   this.loadDatas(this.pageSize);
   
  // }
}


