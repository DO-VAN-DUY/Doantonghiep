import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/common/base-component';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-nvvaomuon',
  templateUrl: './nvvaomuon.component.html',
  styleUrls: ['./nvvaomuon.component.css']
})
export class NvvaomuonComponent extends BaseComponent implements OnInit {
  public list_item:any;
  filterBy: any;
  vao:any;
  ra:any;
  constructor( injector: Injector,private _api : ApiService) {
    super(injector);
   }


  ngOnInit(): void {
    this._api.get('/api/Kiemtra/hienthinvvm').subscribe(res => {
      this.list_item = res;
      setTimeout(() => {
        this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
      });
    });
    
  }
  filter() {
    if(this.filterBy!="")
    this.list_item = [...this.list_item.filter(((it: { hoten: string | any[]; }) => it.hoten.includes(this.filterBy)))];
    // this.list_item=[...this.list_item.filter(((it: { email: string | any[]; }) => it.email.includes(this.filterBy)))];
    else
    {
       this._api.get('/api/Nhanvien/hienthi').subscribe(res => {
      this.list_item = res;
      
     
    });
    } 
  }
  chovao(it:any)
  {
    this.vao={
      id:it.id,
      idnv:it.idnv,
      hoten:it.hoten,
      ngay:it.ngay,
      giovao:it.giovao,
      giora:it.giora,  
    
      lydovaomuon:it.lydovaomuon,
      trangthaivaomuon:0,
      lydorasom:it.lydorasom,
      trangthairasom:it.trangthairasom,
      hople:1
     } 
   
     this._api.post('/api/Kiemtra/Suacong',this.vao).subscribe(res => {
      if(res.success)
      {
        this.vao = res.data; 
        
        setTimeout(() => {
          this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
        });
      }
      alert('Đã chấp nhận yêu cầu');
      return;
    })
  }
  khongchapnhan(it:any)
  {
    this.ra={
      id:it.id,
      idnv:it.idnv,
      hoten:it.hoten,
      ngay:it.ngay,
      giovao:null,
      giora:it.giora,  
    
      lydovaomuon:it.lydovaomuon,
      trangthaivaomuon:0,
      lydorasom:it.lydorasom,
      trangthairasom:it.trangthairasom,
      hople:1
     } 
    
     this._api.post('/api/Kiemtra/Suacong',this.ra).subscribe(res => {
      if(res.success)
      {
        this.ra = res.data; 
        
        setTimeout(() => {
          this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
        });
      }
      alert('Đã từ chối yêu cầu');
      return;
     
    })
  }
  
}
