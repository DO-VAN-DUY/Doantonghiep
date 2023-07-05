import { Component, Injector, OnInit } from '@angular/core';
import { Chart,registerables } from 'node_modules/chart.js';
import { BaseComponent } from 'src/app/core/common/base-component';
import { ApiService } from 'src/app/core/services/api.service';
import { UsersService } from 'src/app/core/services/users.service';
Chart.register(...registerables)
declare var $:any;
// import{Chart} from 'angular2-chartjs';
@Component({
  selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexComponent extends BaseComponent implements OnInit {
  list_items: any;
  list_phucap: any;
  list_nhanvien: any;
  list_check: any;
  currentUser: any;
  luongnv: any;
  tongluong: number | undefined;
  list_item: any;
  tongnv: string | undefined;
  ptramtg: number| undefined;
  ptramktg: number|undefined;
  luongnvq1: any;
  luongnvq2: any;
  luongnvq3: any;
  luongnvq4: any;
  Tnhl: any;
  thongke: any= {idnv: "", ngayhople: "", ngaykohople: "", ngaykotinh: "", tongluong: "",nam:""};
  luongnvdc: any;
  luongnvtc: any;
  luongnvcc: any;
  list_itemnvdg: any;
  list_itemnvtg: any;
  list_itemnvcg: any;
  list_check1: any;
  update_thongke: any= {idnv: "", ngayhople: "", ngaykohople: "", ngaykotinh: "", tongluong: "",nam:""};
  thongkeluong: any;
 
  
 
  constructor(injector: Injector,private _api : ApiService,private _user:UsersService) { 
    super(injector);
    
  } 
  ngOnInit(): void {
    this.Tinhluong();
    this._api.get('/api/Luong/Thongke').subscribe(res => {
      this.thongkeluong = res ;
    })
    this._api.get('/api/Luong/Nvldg').subscribe(res => {
      this.luongnvdc = res ;})
      this._api.get('/api/Luong/Nvltg').subscribe(res => {
        this.luongnvtc = res ;})
        this._api.get('/api/Luong/Nvlcg').subscribe(res => {
          this.luongnvcc = res ;})

    this._api.get('/api/Luong/hienthi').subscribe(res => {
      this.luongnv = res ;
      this.tongluong=0;
      for(var index in this.luongnv)
      {
               this.tongluong+=this.luongnv[index].luongnhandc;         
      }
      })
      this._api.get('/api/Nhanvien/hienthi').subscribe(res => {
        this.list_item = res;
        for(var index in this.list_item)
        {
                this.tongnv=index;
              
        }
        
      });
      this._api.get('/api/Luong/hienthi').subscribe(res => {
        this.luongnv = res ;
        this.ptramtg=0;
        this.ptramktg=0;
        var Tnhl=0;
        var Tnkhl=0;
        var Tncc=0;
        for(var index in this.luongnv)
        {
             Tnhl+=this.luongnv[index].ngayconghople;
             Tnkhl+=this.luongnv[index].ngaycongkohople;
             Tncc+=this.luongnv[index].ngaykhongduoctinh;
            this.ptramtg=Tnhl/(Tnhl+Tnkhl+Tncc)*100;
            this.ptramktg=Tncc/(Tnhl+Tnkhl+Tncc)*100;
        }
        
      })
    

  
  }
TKLQ(it:any)
  {
   const date= new Date();
    var Nam=(date.getFullYear());
    var ngaykohople=0;
    var ngaykotinh=0;
    var ngayhople=0;
    var tongluong=0;
   
    this._api.get('/api/Luong/get_by_id?idnv='+it).subscribe(res => {
      this.list_check1 = res;
      var test= this.list_check1
      for(var index in test)
      {   
            ngayhople += test[index].ngayconghople;
            ngaykotinh+= test[index].ngaykhongduoctinh;
            ngaykohople+=test[index].ngaycongkohople;
             tongluong+= test[index].luongnhandc;
           
      }    
      this.thongke={
        idnv:it,
        songayducong:ngayhople,
        songaythieucong:ngaykohople,
        songaycongchet:ngaykotinh,
        tongluong:tongluong,
        nam:Nam
      }
    // this._api.post('/api/Menu/add_thongke',this.thongke).subscribe(res=>
    //       {
    //         this.thongke = res.data;
      
    //     })
      this._api.get('/api/Luong/hienthi').subscribe(res => {
        this.luongnv = res ;   
        // this._api.post('/api/Menu/add_thongke',this.thongke).subscribe(res=>
        //   {
        //     this.thongke = res.data;
      
        // })
        if(this.luongnv==null)
        {
            this._api.get('/api/Menu/Xoa').subscribe(res => {
            }); 
         
        }
        else
        {
          this.update_thongke={
            id:this.thongke.id,
            idnv:this.thongke.idnv,
            songayducong:this.thongke.songayducong,
            songaythieucong:this.thongke.songaythieucong,
            songaycongchet:this.thongke.songaycongchet,
            tongluong:this.thongke.tongluong,
            nam:this.thongke.nam
          }
          this._api.post('/api/Menu/update_thongke',this.update_thongke).subscribe(res => {
            if(res.success)
            {
              this.update_thongke = res.data;
             setTimeout(() => {
               this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
             });
            
            }
          })
        }
      })
     
    })

  }
  Tinhluong()
  {
    this._api.get('/api/Nhanvien/hienthi').subscribe(res => {
      this.list_nhanvien = res;
        for(var index in this.list_nhanvien)
        {
          this.list_nhanvien[index].id=this.TKLQ(this.list_nhanvien[index].id);
        }
       
    });
  }
  public closeModal() {
    // $('#exampleModal').closest('.modal').modal('hide');
  }
  NVDG(it:any)
  {
    $('#exampleModalDG').modal("show");
    this._api.get('/api/Times/Getkiemtradg?idnv='+it.idnv).subscribe(res => {
      this.list_itemnvdg = res;
    })
  }
  NVTG(it:any)
  {
    console.log(it.idnv)
    $('#exampleModalTG').modal("show");
    this._api.get('/api/Times/Getkiemtratg?idnv='+it.idnv).subscribe(res => {
      this.list_itemnvtg = res;
      console.log(this.list_itemnvtg)
    })
  }
  NVCC(it:any)
  {
    $('#exampleModalCC').modal("show");
    this._api.get('/api/Times/Getkiemtracg?idnv='+it.idnv).subscribe(res => {
      this.list_itemnvcg = res;
    })
  }
}
  

