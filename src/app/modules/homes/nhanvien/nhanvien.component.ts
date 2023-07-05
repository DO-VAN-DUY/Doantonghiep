import { NgFor } from '@angular/common';
import { AfterViewInit, Component, Injector, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

import { BaseComponent } from 'src/app/core/common/base-component';
import { ApiService } from 'src/app/core/services/api.service';
import { UsersService } from 'src/app/core/services/users.service';
declare var $:any;
@Component({
  selector: 'app-nhanvien',
  templateUrl: './nhanvien.component.html',
  styleUrls: ['./nhanvien.component.css']
})
export class NhanvienComponent extends BaseComponent implements OnInit,AfterViewInit {
  [x: string]: any;
  @ViewChild('Formnhanvien')
  Formnhanvien:NgForm | undefined;
  filterBy: any;
  public loc:any;
  public page: any = 1;
  public id: any;
  public pageSize: any = 8;
  public totalItem: any;
  public list_item:any;
  public list_tonhom:any;
  public list_tk:any;
  public capnhatbaocao:any={};
  public baocao:any={};
  loading=false;
  public tt= 1;
  imageSrc:any;
  File:any;
 public list_item_LLTN:any;
  
  nhanvien:any={
    idtk:"",
    idtn:"",
    idpb:"",
    hoten:"",
    email:"",
    sdt:"",
    diachi:"",
    chucvu:"",
    gioitinh:"",
    luongthoathuan:0,
    hinhanh:""
  }
  
   isEdit: boolean=true;
  currentUser: any;
  LLTN: any={
    "id": "",
    "idnv": "" ,
    "hoten": "",
    "ngaysinh": "",
    "email": "",
    "sdt": "",
    "diachi": "",
    "chucvu": "",
    "gioitinh": "",
    "dantoc": "",
    "tongiao": "",
    "sonha": "",
    "masobaohiem": "",
    "hotencha": "",
    "namsinh": "",
    "quoctichb": "",
    "dantocb": "",
    "tongiaob": "",
    "nghenghiepcha": "",
    "sdtcha": "",
    "hokhauthuongtrub": "",
    "hotenme": "",
    "namsinhm": "",
    "quoctichm": "",
    "dantocm": "",
    "tongiaom": "",
    "hokhauthuongtrum": "",
    "slae": "",
    "quoctinh": ""
  };
  LS: any;
  LSs:any;
  LSCTCu:any;
  LSCTMoi:any;
  tncu:any;
  tnmoi:any;
  list_baocao:any;
  list_hopdong:any;
  list_miennhiem:any;
  list_bonhiem:any;
  list_phucap:any;
  list_bacluong:any;
  list_dieudong:any;
  list_khenthuong:any;
  list_bcao:any;
  list_trinhdo:any;
  list_phongban:any;
  mapb:any;
  public file:any;
  public isCreate = false;
  constructor( injector: Injector,private _api : ApiService,private _user:UsersService,private sanitizer:DomSanitizer) {
    super(injector);
   }
Trinhdo(index:any)
 {
   this['manv']=index.id;
   this['matk']=index.idtk;
   
  $('#Trinhdo').modal("show"); 
  $('#trinhdo').hide();
  $('#Xem').show(); 
   $('#thuyenchuyen').hide();
   $('#congviec').hide();
   $('#Khenthuong').hide(); 
   $('#miennhiem').hide(); 
   $('#bonhiem').hide(); 
   $('#dieudong').hide(); 
   $('#baocao').hide();
   $('#phucap').hide();
  $('#bacluong').hide();
  $('#hopdong').hide();
   var x=this['matk'];
   this._api.get('/api/Nhanvien/get_by_idLLTN/'+ x).subscribe(res => {
     this.list_item_LLTN = res;
     var date= this.formatDate(new Date(res.ngaysinh));
     var datebo= this.formatDate(new Date(res.namsinh));
     var dateme= this.formatDate(new Date(res.namsinhm));
     this.LLTN={
      id:"",
       "idnv": 'Nv'+ res.idnv,
       "hoten":  res.hoten,
       "ngaysinh": date,
       "email": res.email,
       "sdt": res.sdt,
       "diachi": res.diachi,
       "chucvu": res.chucvu,
       "gioitinh": res.gioitinh,
       "dantoc": res.dantoc,
       "tongiao": res.tongiao,
       "sonha": res.sonha,
       "masobaohiem": res.masobaohiem,
       "hotencha": res.hotencha,
       "namsinh": datebo,
       "quoctichb": res.quoctichb,
       "dantocb": res.dantocb,
       "tongiaob": res.tongiaob,
       "nghenghiepcha": res.nghenghiepcha,
       "sdtcha": res.sdtcha,
       "hokhauthuongtrub": res.hokhauthuongtrub,
       "hotenme": res.hotenme,
       "namsinhm": dateme,
       "quoctichm": res.quoctichm,
       "dantocm": res.dantocm,
       "tongiaom": res.tongiaom,
       "hokhauthuongtrum": res.hokhauthuongtrum,
       "slae": res.slae,
       "quoctinh": res.quoctinh
     }
     //console.log(this.list_item_LLTN);
   });
 }
//  Xembao()
//  {
//   $('#flipFlop').modal("show"); 
//  }
// Mapb()
// {
//  this.mapb={
//   idpb:this.nhanvien.idpb
//  }

//  this._api.get('/api/Tonhom/get_by_id_tonhom_phongban?idpb='+this.mapb.idpb).subscribe(res => {
//   this.list_tonhom = res; 
// });
// }
  ngOnInit(): void {
    this._user.getUser().subscribe(res=>{
      this.currentUser = res;
    })
    for(let tt=1; tt<=10; tt++){
      this.tt;
    }
    this._api.get('/api/Nhanvien/hienthi').subscribe(res => {
      this.list_item = res;
      setTimeout(() => {
        this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
        this.LoadData();
      });
    });
    this._api.get('/api/Phongban/hienthi').subscribe(res => {
      this.list_phongban = res;
      //debugger;
    });
    
   
    this._api.get('/api/Tonhom/hienthi').subscribe(res => {
      this.list_tonhom = res; 
    });
    this._api.get('/api/User/get_all').subscribe(res => {
      this.list_tk = res;
      
    });
   
    this.loc = localStorage.getItem('loc') || '';
      this._route.params.subscribe(params => {
        this.id = params['id'];
        this._api.post('/api/Nhanvien/search', { loc: this.loc, page: this.page, pageSize: this.pageSize, Id: this.id }).subscribe(res => {
          this.list_item = res.data;
          this.totalItem = res.totalItems;
          setTimeout(() => {
            this.loadScripts('assets/js/hide_menu.js', 'assets/js/slide_show.js');
          });
        });
  
      });
      
      
  }
  public LoadData() {
    this._api.post('/api/Nhanvien/search', {page: 1, pageSize: 7, hoten:this.nhanvien.hoten}).subscribe(res => {
      this.list_item = res.data;
      this.totalItem = res.totalItems;
      setTimeout(() => {
       this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
     });
    });
  }
  
  public loadPage(page: any) {
    this._api.post('/api/Nhanvien/search', {loc: this.loc,  page: page, pageSize: this.pageSize, Id: this.id }).subscribe(res => {
      this.list_item = res.data;
      this.totalItem = res.totalItems;
      setTimeout(() => {
        this.loadScripts('assets/js/hide_menu.js', 'assets/js/slide_show.js');
      });
    });
  }
  public DeleteModel(index:any) {
    console.log(index);
    if (confirm("Bạn muốn xóa nhân viên này!")) {
      this._api.get('/api/Nhanvien/XoaNhanvien?Id='+ index).subscribe(res => {
        alert('Xóa dữ liệu thành công');
        this.LoadData();
      });  
  }
  
}

  nhanviens()
  { 
  }
  // filter() {
  //   if(this.filterBy!="")
  //   this.list_item = [...this.list_item.filter(((it: { hoten: string | any[]; }) => it.hoten.includes(this.filterBy)))];
  //   // this.list_item=[...this.list_item.filter(((it: { email: string | any[]; }) => it.email.includes(this.filterBy)))];
  //   else
  //   {
  //      this._api.get('/api/Nhanvien/hienthi').subscribe(res => {
  //     this.list_item = res;
      
     
  //   });
  //   } 
  // }
  ngAfterViewInit() {  
   }

   public upload(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      this.file = event.target.files[0];
    }
    // this.imageSrc = this.sanitizer.bypassSecurityTrustUrl(
    //   window.URL.createObjectURL(event.target.files[0])
    // );
    // this.file = event.target.files[0];

  }
  openModel()
   {
    $('#largeModal').modal("show");
          this.isEdit=false;
          this.nhanvien={
            Id:"",
            idtk:"",
            idpb:"",
            idtn:"",
            hoten:"",
            email:"",
            sdt:"",
            diachi:"",
            chucvu:"",
            gioitinh:"",
            luongthoathuan:0,
            hinhanh:""
           
          }
      
     
   }
  
   addNhanvien() {
 
    var x={
      Id:this.nhanvien.Id,
      idtk:'1057f7f5-346d-42a7-9706-373aea01faa3',
      idtn:this.nhanvien.idtn,
      idpb:'17e782c9-d0cd-4a44-baa5-46a7990384e2',
     //idpb:this.nhanvien.idpb,
      hoten:this.nhanvien.hoten,
      email:this.nhanvien.email,
      sdt:this.nhanvien.sdt,
      diachi:this.nhanvien.diachi,
      chucvu:this.nhanvien.chucvu,
      gioitinh:this.nhanvien.gioitinh,
      luongthoathuan:this.nhanvien.luongthoathuan
    };
    
   
    if(this.nhanvien.idtn==""||this.nhanvien.hoten==""||this.nhanvien.email==""||this.nhanvien.sdt==""||this.nhanvien.diachi==""||this.nhanvien.chucvu==""||this.nhanvien.gioitinh==""||this.nhanvien.luongthoathuan=="")
    {
      this.loading=false;
      alert('Vui lòng nhập thông tin đầy đủ')
      return;
    }
    else{ 
    
     if(this.file)
     {
      // this._api.uploadFileSingle('/api/Nhanvien/upload-single',this.file).subscribe((res: any) => {    
      //   if (res && res.body && res.body.filePath) {
         // x.hinhanh = res.body.filePath;   
        
          
         this['x']={
            Id:this.nhanvien.Id,
            idtk:'1057f7f5-346d-42a7-9706-373aea01faa3',
            idtn:this.nhanvien.idtn,
            idpb:'17e782c9-d0cd-4a44-baa5-46a7990384e2',
            //idpb:this.nhanvien.idpb,
            hoten:this.nhanvien.hoten,
            email:this.nhanvien.email,
            sdt:this.nhanvien.sdt,
            diachi:this.nhanvien.diachi,
            chucvu:this.nhanvien.chucvu,
            gioitinh:this.nhanvien.gioitinh,
            luongthoathuan:this.nhanvien.luongthoathuan,
            hinhanh:this.file.name
          }
       
          
          this._api.post('/api/Nhanvien/ThemNhanvien', this['x']).subscribe(res => {
            if (res && res.data) {
              alert('Thêm dữ liệu thành công');
              this.LoadData();
            } else {
              alert('Thêm dữ liệu thành công');
              this.LoadData();
            }
          });
      //   }
      // });   
      }
     else
     {
      this._api.post('/api/Nhanvien/ThemNhanvien', x).subscribe(res => {
        if (res && res.data) {
          alert('Thêm dữ liệu thành công');
          this.LoadData();
        } else {
          alert('Thêm dữ liệu thành công');
         
          this.LoadData();
        }
      });
     
     }
    }
  }
           
  //   else {
     
  //     if (this.file) {
  //       this._api.uploadFileSingle('/api/upload/upload-single', 'user', this.file).subscribe((res: any) => {
  //         if (res && res.body && res.body.filePath) {
  //           this.nhanvien.hinhanh= res.body.filePath;
  //           this._api.post('/api/user/update-user', obj).subscribe(res => {
  //             if (res && res.data) {
  //               alert('Cập nhật dữ liệu thành công');
  //               this.LoadData();
  //               this.closeModal();
  //             } else {
  //               alert('Có lỗi')
  //             }
  //           });
  //         }
  //       });
  //     } else {
  //       this._api.post('/api/user/update-user', obj).subscribe(res => {
  //         if (res && res.data) {
  //           alert('Cập nhật dữ liệu thành công');
  //           this.LoadData();
  //           this.closeModal();
  //         } else {
  //           alert('Có lỗi')
  //         }
  //       });
  //     }
  //   }

  // }

   
  //  addNhanvien()
  //  {
  //   if(!this.Formnhanvien?.valid)
  //   {
  //     this.loading=false;
  //     alert('Vui lòng nhập thông tin đầy đủ')
  //     return;
  //   }
  //   else
  //   {    
  //      var x=this.nhanvien;
  //         this._api.post('/api/Nhanvien/ThemNhanvien', x).subscribe(res => {
  //           if (res && res.data) {
  //             alert('Thêm dữ liệu thành công');
             
  //           } else {
  //             alert('Có lỗi')
  //           }
  //         });
  //      alert('Thêm thành công');
      
  //    }
  //   }

    // if (this.fileUpload) {
    //   console.log( this.file);
    //   this._api.uploadFileSingle('/api/Nhanvien/upload','user', this.file).subscribe((res: any) => {
    //     if (res && res.body && res.body.filePath) {
    //       this.nhanvien.hinhanh= res.body.filePath;
    //       // this._api.post('/api/user/create-user', obj).subscribe(res => {
    //       //   if (res && res.data) {
    //       //     alert('Thêm dữ liệu thành công');
             
    //       //   } else {
    //       //     alert('Có lỗi')
    //       //   }
    //       // });
    //       console.log( this.nhanvien.hinhanh);
          
    //     }
    //   });
    // } 
    // else {
    //   this._api.post('/api/user/create-user', obj).subscribe(res => {
    //     if (res && res.data) {
    //       alert('Thêm dữ liệu thành công');
         
    //     } else {
    //       alert('Có lỗi')
    //     }
    //   });
    // }
 

    EditbcModel(it:any)
    {
      this.baocao=it;
      var date= this.formatDate(new Date(it.ngay));
      this.capnhatbaocao={
        id:it.id,
        idnv: this.baocao.idnv,
        thu:it.thu,
        ngay:date,
        noidung: this.baocao.noidung,
        nhanxet: this.baocao.nhanxet,  
        linkbaocao:this.baocao.linkbaocao,
      }
    }
    Editbc()
    {
      this._api.post('/api/Nhanvien/Capnhatbaocao',this.capnhatbaocao).subscribe(res => {
        if(res.success)
        {
          this.capnhatbaocao = res.data;
         setTimeout(() => {
           this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
         });
        
        }
       
        alert('Cập nhật thành công')
        
       
      })
    }
  
  EditModel(index:any)
  {
    this.isEdit=true;
   this.nhanvien=index;
   this['moi']={
    Id:this.nhanvien.id,
    idtn:this.nhanvien.idtn,
  
    hoten:this.nhanvien.hoten,
    email:this.nhanvien.email,
    sdt:this.nhanvien.sdt,
    diachi:this.nhanvien.diachi,
    chucvu:this.nhanvien.chucvu,
    gioitinh:this.nhanvien.gioitinh,
    luongthoathuan:this.nhanvien.luongthoathuan,
    hinhanh:this.nhanvien.hinhanh,
   }
   
  }
  EditNhanvien()
  {
  //console.log(this['moi'])
   var y=this.nhanvien;  
   var x=this['moi'];  
   var date= this.formatDate(new Date());
  this._api.get('/api/Tonhom/get_by_id_tonhom?id='+ y.idtn).subscribe(res=>
    {
       this.LSCTCu=res;
      
       this._api.get('/api/Tonhom/get_by_id_tonhom?id='+ x.idtn).subscribe(res=>
        {
           this.LSCTMoi=res;
          this['LSCT']={
            Id:0,
            idnv:y.id,
            hoten:y.hoten,
            SoQD:'QD-152',
            Tocu:this.LSCTCu[0].tentn,
            Tomoi:this.LSCTMoi[0].tentn,
            Ngaychuyen:date,
            Ngayhieuluc:date,
            Nguoiky:this.currentUser.name
          } ;
        
          this._api.get('/api/Phongban/get_by_id/'+ this.LSCTCu[0].idpb).subscribe(res=>
            {
              this['pbcu']=res;
           
             
             this._api.get('/api/Phongban/get_by_id/'+ this.LSCTMoi[0].idpb).subscribe(res=>
              {
                this['pbmoi']=res;
               
              var pbcu= this['pbcu'].tenpb;
              var pbmoi= this['pbmoi'].tenpb;
               this['LSDD']={
                Id:0,
                idnv:y.id,
                hoten:y.hoten,
                SoQD:'QD-152',
                Phongbancu:pbcu,
                Phongbanmoi:pbmoi,
                Ngaychuyen:date,
                Ngayhieuluc:date,
                Nguoiky:this.currentUser.name
               }
               if(this['LSDD'].Phongbancu!=this['LSDD'].Phongbanmoi)
          {
          this._api.post('/api/Phucap/CreateDieudong',this['LSDD']).subscribe(res=>
            {
              this['LSDD'] = res.data;
             
            })
          }
              })
            })
          if(this['LSCT'].Tocu!=this['LSCT'].Tomoi)
          {
          this._api.post('/api/Tonhom/ThemLSCT',this['LSCT']).subscribe(res=>
            {
              this['LSCT'] = res.data;
             
            })
          }
        }) 
    })
  this['Bonhiem']={
    Id:0,
    idnv:y.id,  
    hoten:y.hoten,
    SoQD:'QD-300',
    chucvucu:x.chucvu,
    chucvumoi:y.chucvu,
    Ngaychuyen:date,
    Ngayhieuluc:date,
    Nguoiky:this.currentUser.name
   }
   this['Miennhiem']={
    Id:0,
    idnv:y.id,  
    hoten:y.hoten,
    SoQD:'QD-400',
    chucvucu:x.chucvu,
    chucvumoi:y.chucvu,
    Ngaychuyen:date,
    Ngayhieuluc:date,
    Nguoiky:this.currentUser.name
   } 
   if(this['Bonhiem'].chucvucu=='Nhân viên' && this['Bonhiem'].chucvumoi=='Nhân viên' ||this['Bonhiem'].chucvucu=='Trưởng nhóm' && this['Bonhiem'].chucvumoi=='Trưởng nhóm'||
  this['Bonhiem'].chucvucu=='Phó phòng' && this['Bonhiem'].chucvumoi=='Phó phòng'||this['Bonhiem'].chucvucu=='Trưởng phòng' && this['Bonhiem'].chucvumoi=='Trưởng phòng'||
  this['Bonhiem'].chucvucu=='Phó giám đốc' && this['Bonhiem'].chucvumoi=='Phó giám đốc'||this['Bonhiem'].chucvucu=='Giám đốc' && this['Bonhiem'].chucvumoi=='Giám đốc' )
  {
    this._api.post('/api/Nhanvien/SuaNhanvien',y).subscribe(res => {
      if(res.success)
      {
       this.nhanvien = res.data;
       this.isEdit=true;
       setTimeout(() => {
         this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
       }); 
      }
      alert('Sửa thành công');
     return;
     
    })
  }
   if( this['Bonhiem'].chucvucu=='Nhân viên' && this['Bonhiem'].chucvumoi=='Phó phòng' || this['Bonhiem'].chucvucu=='Nhân viên' && this['Bonhiem'].chucvumoi=='Trưởng nhóm'
   || this['Bonhiem'].chucvucu=='Nhân viên' && this['Bonhiem'].chucvumoi=='Trưởng phòng' || this['Bonhiem'].chucvucu=='Nhân viên' && this['Bonhiem'].chucvumoi=='Phó giám đốc'
   || this['Bonhiem'].chucvucu=='Nhân viên' && this['Bonhiem'].chucvumoi=='Giám đốc' ||
   this['Bonhiem'].chucvucu=='Trưởng nhóm' && this['Bonhiem'].chucvumoi=='Phó phòng'||this['Bonhiem'].chucvucu=='Trưởng nhóm' && this['Bonhiem'].chucvumoi=='Trưởng phòng'||
   this['Bonhiem'].chucvucu=='Trưởng nhóm' && this['Bonhiem'].chucvumoi=='Phó giám đốc'||this['Bonhiem'].chucvucu=='Trưởng nhóm' && this['Bonhiem'].chucvumoi=='Giám đốc'||
   this['Bonhiem'].chucvucu=='Phó phòng' && this['Bonhiem'].chucvumoi=='Trưởng phòng'|| this['Bonhiem'].chucvucu=='Phó phòng' && this['Bonhiem'].chucvumoi=='Phó giám đốc'||
   this['Bonhiem'].chucvucu=='Phó phòng' && this['Bonhiem'].chucvumoi=='Giám đốc'|| this['Bonhiem'].chucvucu=='Trưởng phòng' && this['Bonhiem'].chucvumoi=='Phó giám đốc'||
   this['Bonhiem'].chucvucu=='Trưởng phòng' && this['Bonhiem'].chucvumoi=='Giám đốc'|| this['Bonhiem'].chucvucu=='Phó giám đốc' && this['Bonhiem'].chucvumoi=='Giám đốc')
  {
  this._api.post('/api/Tonhom/Createbonhiem',this['Bonhiem']).subscribe(res=>
    {
      this['Bonhiem'] = res.data;
    })
  }
  
  if( this['Bonhiem'].chucvucu=='Phó phòng' && this['Bonhiem'].chucvumoi=='Nhân viên' || this['Bonhiem'].chucvucu=='Trưởng nhóm' && this['Bonhiem'].chucvumoi=='Nhân viên'
  || this['Bonhiem'].chucvucu=='Trưởng phòng' && this['Bonhiem'].chucvumoi=='Nhân viên' || this['Bonhiem'].chucvucu=='Phó giám đốc' && this['Bonhiem'].chucvumoi=='Nhân viên'
  || this['Bonhiem'].chucvucu=='Giám đốc' && this['Bonhiem'].chucvumoi=='Nhân viên' ||
  this['Bonhiem'].chucvucu=='Phó phòng' && this['Bonhiem'].chucvumoi=='Trưởng nhóm'||this['Bonhiem'].chucvucu=='Trưởng phòng' && this['Bonhiem'].chucvumoi=='Trưởng nhóm'||
  this['Bonhiem'].chucvucu=='Phó giám đốc' && this['Bonhiem'].chucvumoi=='Trưởng nhóm'||this['Bonhiem'].chucvucu=='Giám đốc' && this['Bonhiem'].chucvumoi=='Trưởng nhóm'||
  this['Bonhiem'].chucvucu=='Trưởng phòng' && this['Bonhiem'].chucvumoi=='Phó phòng'|| this['Bonhiem'].chucvucu=='Phó giám đốc' && this['Bonhiem'].chucvumoi=='Phó phòng'||
  this['Bonhiem'].chucvucu=='Giám đốc' && this['Bonhiem'].chucvumoi=='Phó phòng'|| this['Bonhiem'].chucvucu=='Phó giám đốc' && this['Bonhiem'].chucvumoi=='Trưởng phòng'||
  this['Bonhiem'].chucvucu=='Giám đốc' && this['Bonhiem'].chucvumoi=='Trưởng phòng'|| this['Bonhiem'].chucvucu=='Giám đốc' && this['Bonhiem'].chucvumoi=='Phó giám đốc')
  {
  
    this._api.post('/api/Tonhom/Createmiennhiem',this['Miennhiem']).subscribe(res=>
      {
        this['Miennhiem'] = res.data;
      })
  }
   this._api.post('/api/Nhanvien/SuaNhanvien',y).subscribe(res => {
    if(res.success)
    {
     this.nhanvien = res.data;
     this.isEdit=true;
     setTimeout(() => {
       this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
     });
    
    }

  })
 }
 public closeModal() {
  $('#exampleModal').closest('.modal').modal('hide');
}
public closeModals() {
  $('#Xem').closest('.modal').modal('hide');
}
public closeModalss() {
  $('#largeModal').closest('.modal').modal('hide');
}
public closeModalsss() {
  $('#exampleModals').closest('.modal').modal('hide');
}
public Showcv()
{
  $('#congviec').hide();
  $('#trinhdo').hide();
  $('#thuyenchuyen').hide();
  $('#Xem').hide(); 
  $('#Khenthuong').hide(); 
  $('#miennhiem').hide(); 
  $('#bonhiem').hide(); 
  $('#dieudong').hide();
  $('#baocao').hide();
  $('#phucap').hide();
  $('#bacluong').hide();
  $('#hopdong').show();
  var x=this['manv'];
  this._api.get('/api/Hopdong/get_by_id_Hopdong?idnv='+ x).subscribe(res => {
    this.list_hopdong = res; 
  });

}
public Showtd()
{
  $('#congviec').hide();
  $('#trinhdo').show();
  $('#thuyenchuyen').hide();
  $('#Xem').hide(); 
  $('#Khenthuong').hide(); 
  $('#miennhiem').hide(); 
  $('#bonhiem').hide(); 
  $('#dieudong').hide();
  $('#baocao').hide();
  $('#phucap').hide();
  $('#bacluong').hide();
  $('#hopdong').hide();
  var x=this['manv'];
  this._api.get('/api/Trinhdo/get_by_id_Trinhdo?idnv='+ x).subscribe(res => {
    this.list_trinhdo = res; 
    
  });
}
 Xem()
 {
   $('#Xem').show(); 
   $('#thuyenchuyen').hide();
   $('#congviec').hide();
   $('#trinhdo').hide();
   $('#Khenthuong').hide(); 
   $('#baocao').hide();
   $('#phucap').hide();
  $('#bacluong').hide();
  $('#hopdong').hide();
   var x=this['manv'];
   this._api.get('/api/Nhanvien/get_by_idLLTN/'+ x).subscribe(res => {
     this.list_item_LLTN = res;
     var date= this.formatDate(new Date(res.ngaysinh));
     var datebo= this.formatDate(new Date(res.namsinh));
     var dateme= this.formatDate(new Date(res.namsinhm));
     this.LLTN={
      id:"",
       "idnv": 'Nv'+ res.idnv,
       "hoten":  res.hoten,
       "ngaysinh": date,
       "email": res.email,
       "sdt": res.sdt,
       "diachi": res.diachi,
       "chucvu": res.chucvu,
       "gioitinh": res.gioitinh,
       "dantoc": res.dantoc,
       "tongiao": res.tongiao,
       "sonha": res.sonha,
       "masobaohiem": res.masobaohiem,
       "hotencha": res.hotencha,
       "namsinh": datebo,
       "quoctichb": res.quoctichb,
       "dantocb": res.dantocb,
       "tongiaob": res.tongiaob,
       "nghenghiepcha": res.nghenghiepcha,
       "sdtcha": res.sdtcha,
       "hokhauthuongtrub": res.hokhauthuongtrub,
       "hotenme": res.hotenme,
       "namsinhm": dateme,
       "quoctichm": res.quoctichm,
       "dantocm": res.dantocm,
       "tongiaom": res.tongiaom,
       "hokhauthuongtrum": res.hokhauthuongtrum,
       "slae": res.slae,
       "quoctich": res.quoctich
     }
     //console.log(this.list_item_LLTN);
   });

    
 }
 Xemls()
 {
  var x=this['manv'];
  $('#thuyenchuyen').show();
  $('#congviec').hide();
  $('#trinhdo').hide();
  $('#Xem').hide();
  $('#Khenthuong').hide();  
  $('#miennhiem').hide(); 
  $('#bonhiem').hide(); 
  $('#dieudong').hide();
  $('#baocao').hide();
  $('#phucap').hide();
  $('#bacluong').hide();
  $('#hopdong').hide();
  // $('#exampleModalCenter').modal("show");
  console.log(x);
  this._api.get('/api/Tonhom/hienthiLSCT?idnv='+ x).subscribe(res=>
    {
      this.LS = res;
      //var ngayky= this.formatDate(new Date(res.ngaychuyen));
      var y=this.LS.tocu;
      var z=this.LS.tomoi;
      //console.log(ngayky);
      this._api.get('/api/Nhanvien/get_by_id_nvs?id='+ x).subscribe(res=>
        {
          this.LSs = res;
       
          // this._api.get('/api/Tonhom/get_by_id_tonhom?id='+ y).subscribe(res=>
          //   {
          //     this.tncu = res;
            
          //   })
          //   this._api.get('/api/Tonhom/get_by_id_tonhom?id='+ z).subscribe(res=>
          //     {
          //       this.tnmoi = res;
              
          //     })
        })
    
    })
   
 }
Khenthuong()
{
 
  $('#trinhdo').hide();
  $('#Xem').hide(); 
   $('#thuyenchuyen').hide();
   $('#congviec').hide();
   $('#Khenthuong').show(); 
   $('#miennhiem').hide(); 
   $('#bonhiem').hide(); 
   $('#dieudong').hide();
   $('#baocao').hide();
   $('#phucap').hide();
  $('#bacluong').hide();
  $('#hopdong').hide();
  var x=this['manv'];
  this._api.get('/api/Khenthuong/get_by_id_Khenthuong?idnv='+ x).subscribe(res => {
    this.list_khenthuong = res; 
  });
  this._api.get('/api/Tonhom/get_by_id_tonhom?id='+ this['idtn']).subscribe(res => {
    this['list_tn'] = res; 
    console.log(this['list_tn'])
  });
  this._api.get('/api/Phongban/get_by_id/'+ x).subscribe(res => {
    this['list_pb'] = res; 
    console.log(this['list_pb'])
  });
  

}
miennhiem()
{
 
  $('#trinhdo').hide();
  $('#Xem').hide(); 
   $('#thuyenchuyen').hide();
   $('#congviec').hide();
   $('#Khenthuong').hide(); 
   $('#miennhiem').show(); 
   $('#bonhiem').hide(); 
   $('#dieudong').hide();
   $('#baocao').hide();
   $('#phucap').hide();
  $('#bacluong').hide();
  $('#hopdong').hide();
  var x=this['manv'];
  this._api.get('/api/Tonhom/get_by_id_miennhiem?id='+ x).subscribe(res => {
    this.list_miennhiem = res; 
    this._api.get('/api/Nhanvien/get_by_id_nvs?id='+ x).subscribe(res=>
      {
        this.LSs = res;
     
       
      })
  });

}
bonhiem()
{
  $('#baocao').hide();
  $('#trinhdo').hide();
  $('#Xem').hide(); 
   $('#thuyenchuyen').hide();
   $('#congviec').hide();
   $('#Khenthuong').hide();
   $('#miennhiem').hide(); 
   $('#bonhiem').show(); 
   $('#dieudong').hide(); 
   $('#phucap').hide();
  $('#bacluong').hide();
  $('#hopdong').hide();
  var x=this['manv'];
  this._api.get('/api/Tonhom/get_by_id_bonhiem?id='+ x).subscribe(res => {
    this.list_bonhiem = res; 
    this._api.get('/api/Nhanvien/get_by_id_nvs?id='+ x).subscribe(res=>
      {
        this.LSs = res;
     
       
      })
  });

}
dieudong()
{
  $('#baocao').hide();
  $('#trinhdo').hide();
  $('#Xem').hide(); 
   $('#thuyenchuyen').hide();
   $('#congviec').hide();
   $('#Khenthuong').hide(); 
   $('#miennhiem').hide(); 
   $('#bonhiem').hide(); 
   $('#dieudong').show();
   $('#phucap').hide();
  $('#bacluong').hide();
  $('#hopdong').hide();
  var x=this['manv'];
  this._api.get('/api/Phucap/get_by_idLSDD?idnv='+ x).subscribe(res => {
    this.list_dieudong = res; 
    console.log(this.list_dieudong);
    this._api.get('/api/Nhanvien/get_by_id_nvs?id='+ x).subscribe(res=>
      {
        this.LSs = res;
     
       
      })
  });

}
 public loadData(pageSize:any) {
  this.pageSize = pageSize;
  this._route.params.subscribe(params => {
  this.id = params['id'];
   this._api.post('/api/Nhanvien/search', { loc: this.loc, page: 1, pageSize: pageSize, Id: this.id }).subscribe(res => {
     this.list_item = res.data;
     this.totalItem = res.totalItems;
     setTimeout(() => {
      this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
    });
   });
  });
 }

 Xembaocao()
 {
  $('#congviec').hide();
  $('#trinhdo').hide();
  $('#thuyenchuyen').hide();
  $('#Xem').hide(); 
  $('#Khenthuong').hide(); 
  $('#miennhiem').hide(); 
  $('#bonhiem').hide(); 
  $('#dieudong').hide();
  $('#baocao').show();
  $('#phucap').hide();
  $('#bacluong').hide();
  $('#hopdong').hide();
  var x=this['matk'];
  this._api.get('/api/Nhanvien/get_by_id_baocao?idnv='+ x).subscribe(res => {
    this.list_baocao = res; 
  });
 }
 phucap()
 {
  $('#congviec').hide();
  $('#trinhdo').hide();
  $('#thuyenchuyen').hide();
  $('#Xem').hide(); 
  $('#Khenthuong').hide(); 
  $('#miennhiem').hide(); 
  $('#bonhiem').hide(); 
  $('#dieudong').hide();
  $('#baocao').hide();
  $('#phucap').show();
  $('#bacluong').hide();
  $('#hopdong').hide();
  var x=this['manv'];
  this._api.get('/api/Phucap/get_by_id_Phucap?idnv='+ x).subscribe(res => {
    this.list_phucap = res; 
    console.log( this.list_phucap.tenphucap)
    // this._api.get('/api/Nhanvien/get_by_id_nvs?id='+ x).subscribe(res=>
    //   {
    //     this.LSs = res;
     
        
    //   })
  });

 }
 bacluong()
 {
  $('#congviec').hide();
  $('#trinhdo').hide();
  $('#thuyenchuyen').hide();
  $('#Xem').hide(); 
  $('#Khenthuong').hide(); 
  $('#miennhiem').hide(); 
  $('#bonhiem').hide(); 
  $('#dieudong').hide();
  $('#baocao').hide();
  $('#phucap').hide();
  $('#bacluong').show();
  $('#hopdong').hide();
  var x=this['manv'];
  this._api.get('/api/Bacluong/get_by_id_bacluong?id='+ x).subscribe(res => {
    this.list_bacluong = res; 
    this._api.get('/api/Nhanvien/get_by_id_nvs?id='+ x).subscribe(res=>
      {
        this.LSs = res;
     
       
      })
  });

 }
}