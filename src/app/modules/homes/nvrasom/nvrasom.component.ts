import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/common/base-component';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-nvrasom',
  templateUrl: './nvrasom.component.html',
  styleUrls: ['./nvrasom.component.css']
})
export class NvrasomComponent extends BaseComponent implements OnInit {

  public list_item:any;
  filterBy: any;
  chapnhan:any;
  kochapnhan:any;
  constructor( injector: Injector,private _api : ApiService) {
    super(injector);
   }


  ngOnInit(): void {
    this._api.get('/api/Kiemtra/hienthinvrs').subscribe(res => {
      this.list_item = res;
    
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
  vao(it:any)
  {
    const date= new Date();
    let timer=new Date(it.giora);
    let timev=new Date(it.giovao);
    var diff = timer.getHours() - timev.getHours();
   
    if(it.giovao!=null || it.giora!=null && diff >=8 )
    { 
      this.chapnhan={
        id:it.id,
        hoten:it.hoten,
        idnv:it.idnv,
        ngay:it.ngay,
        giovao:it.giovao,
        giora:it.giora,  
        lydovaomuon:it.lydovaomuon,
        trangthaivaomuon:it.trangthaivaomuon,
        lydorasom:0,
        trangthairasom:it.trangthairasom,
        hople:0
      }
    }
    else
    {
      this.chapnhan={
        id:it.id,
        idnv:it.idnv,
        hoten:it.hoten,
        ngay:it.ngay,
        giovao:it.giovao,
        giora:it.giora,   
        lydovaomuon:it.lydovaomuon,
        trangthaivaomuon:it.trangthaivaomuon,
        lydorasom:0,
        trangthairasom:it.trangthairasom,
        hople:1
      }
    }
   
    if(it.giovao!=null && it.giora!=null || diff<3)
    {
      this.chapnhan={
        id:it.id,
        idnv:it.idnv,
        hoten:it.hoten,
        ngay:it.ngay,
        giovao:it.giovao,
        giora:it.giora,  
       
        lydovaomuon:it.lydovaomuon,
        trangthaivaomuon:it.trangthaivaomuon,
        lydorasom:it.lydorasom,
        trangthairasom:0,
        hople:-1
      }
    }
    this._api.post('/api/Kiemtra/Suacong',this.chapnhan).subscribe(res => {
      if(res.success)
      {
       this.chapnhan = res.data;  
      
     }    
     alert('Đã chấp nhận yêu cầu');
     return;
    
    })
   
  }
  no(it:any)
  {
    const date= new Date();
    let timer=new Date(it.giora);
    let timev=new Date(it.giovao);
    var diff = timer.getHours() - timev.getHours();
    if(it.giovao!=null)
    {
      this.kochapnhan={
        id:it.id,
        idnv:it.idnv,
        hoten:it.hoten,
        ngay:it.ngay,
        giovao:it.giovao,
        giora:null,  
       
        lydovaomuon:it.lydovaomuon,
        trangthaivaomuon:it.trangthaivaomuon,
        lydorasom:it.lydorasom,
        trangthairasom:0,
        hople:1
      }
    }
    else {
      this.kochapnhan={
        id:it.id,
        idnv:it.idnv,
        hoten:it.hoten,
        ngay:it.ngay,
        giovao:it.giovao,
        giora:null,  
    
        lydovaomuon:it.lydovaomuon,
        trangthaivaomuon:it.trangthaivaomuon,
        lydorasom:it.lydorasom,
        trangthairasom:0,
        hople:-1
      }
    }
  
   
    this._api.post('/api/Kiemtra/Suacong',this.kochapnhan).subscribe(res => {
      if(res.success)
      {
       this.kochapnhan = res.data;  
      
     }    
     alert('Đã từ chối yêu cầu');
     return;
    })
  }

}

