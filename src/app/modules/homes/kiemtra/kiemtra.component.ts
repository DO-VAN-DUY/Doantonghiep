import { AfterViewInit, Component, Injector, OnInit, Renderer2 } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { BaseComponent } from 'src/app/core/common/base-component';
import { ApiService } from 'src/app/core/services/api.service';
import * as XLSX from 'xlsx';
declare var $:any;

@Component({
  selector: 'app-kiemtra',
  templateUrl: './kiemtra.component.html',
  styleUrls: ['./kiemtra.component.css']
})
export class KiemtraComponent  extends BaseComponent implements OnInit,AfterViewInit {
  public list_item:any;
  public list_nhanvien:any;
  public loc:any;
  public page: any = 1;
  public id: any;
  public pageSize: any = 8;
  public totalItem: any;
  editor:any = ClassicEditor;
  editors:any = ClassicEditor;
  kiemtra:any={
    idnv:"",
    hoten:"",
    ngay: "",
    giovao:"",
    giora:"",
    
    lydovaomuon:"",
    trangthaivaomuon:0,
    lydorasom:"",
    trangthairasom:0,
    hople:0,
    sogio:0
  }
  moi:any={
  };
  
   isEdit: boolean=true;
  add: any;
  constructor( injector: Injector,private _api : ApiService) {
    super(injector);
   }

  ngOnInit(): void {
  
    this._api.get('/api/Kiemtra/hienthi').subscribe(res => {
      this.list_item = res;
      
      //debugger;
    });
    this._api.get('/api/User/get_all').subscribe(res => {
      this.list_nhanvien = res;
    });
    this.totalItem =1;
    this.loc = localStorage.getItem('loc') || '';
    this._route.params.subscribe(params => {
      this.id = params['id'];
      this._api.post('/api/Kiemtra/searchs', { loc: this.loc, page: this.page, pageSize: this.pageSize, Id: this.id }).subscribe(res => {
        this.list_item = res.data;
        this.totalItem = res.totalItems;
       
        setTimeout(() => {
          this.loadScripts('assets/js/hide_menu.js', 'assets/js/slide_show.js');
        });
      });
     
    });
  }
  public LoadData() {
   console.log(this.kiemtra)
    this._api.post('/api/Kiemtra/searchs', { page: 1, pageSize: 10, hoten: this.kiemtra.hoten}).subscribe(res => {
      this.list_item = res.data;
    
    
      setTimeout(() => {
        this.loadScripts(
          // 'assets/js/core/app.js',
          // 'assets/js/pages/datatables_basic.js',
          // 'assets/js/pages/datatables_basic.js'
        );
      });
    });
  }
  public loadPage(page: any) {
    this._api.post('/api/Kiemtra/searchs', {loc: this.loc, page: page, pageSize: this.pageSize, Id: this.id }).subscribe(res => {
      this.list_item = res.data;
      this.totalItem = res.totalItems;
    
      setTimeout(() => {
        this.loadScripts('assets/js/hide_menu.js', 'assets/js/slide_show.js');
      });
    });
  }
 
  ngAfterViewInit() {  
   }
   openModel()
   {
    $('#largeModal').modal("show");
      
        {
          this.isEdit=false;
          this.kiemtra={
            Id:0,
            idnv:"",
            ngay: "",
            giovao:"",
            giora:"",
            lydovaomuon:"",
            trangthaivaomuon:0,
            lydorasom:"",
            trangthairasom:0,
            hople:0,
            hoten:"",
            sogio:0
          }
        }
   }
   
   DeleteModel(it:number)
   {
    if (confirm("Bạn muốn xóa phần công này!")) {
      this._api.get('/api/Kiemtra/Xoacong?id='+ it).subscribe(res => {
        alert('Xóa dữ liệu thành công');
        this.LoadData();
      });  
     }
     else
     {
      
     }
    
   } 
   fileName="Exportchamcong.xlsx"
   public exportExcelcl():void
   {
    let element=document.getElementById('Exportcl');
    const ws:XLSX.WorkSheet=XLSX.utils.table_to_sheet(element);
    const wb:XLSX.WorkBook=XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb,ws,'Sheet1');
    XLSX.writeFile(wb,this.fileName)
   }
   EditModel(index:any)
  {
    this.isEdit=true;
    this.kiemtra=index;
    var date= this.formatDate(new Date(index.ngay));
   // var Timevao= this.FormatTime(new Date(this.kiemtra.giovao));  
   this.kiemtra={
    idnv:index.idnv,
    ngay: date,
    giovao:index.giovao,
    giora:index.giora,
    lydovaomuon:index.lydovaomuon,
    trangthaivaomuon:index.trangthaivaomuon,
    lydorasom:index.lydorasom,
    trangthairasom:index.trangthairasom,
    hople:index.hople,
    sogio:index.sogio
  };

  }
  public closeModalsss() {
    $('#largeModal').closest('.modal').modal('hide');
  }
   addkiemtra()
   {
    var date= this.formatDate(new Date(this.kiemtra.ngay));
       
    this.add={
      idnv:this.kiemtra.idnv,
      ngay: date,
      giovao:this.kiemtra.giovao,
      giora:this.kiemtra.giora,
      lydovaomuon:this.kiemtra.lydovaomuon,
      trangthaivaomuon:this.kiemtra.trangthaivaomuon,
      lydorasom:this.kiemtra.lydorasom,
      trangthairasom:this.kiemtra.trangthairasom,
      hople:this.kiemtra.hople,
      hoten:this.kiemtra.hoten,
      sogio: this.kiemtra.giora.getHours()-this.kiemtra.giovao.getHours()
    }
  
    this._api.post('/api/Kiemtra/themcong',this.add).subscribe(res => {
      //var res:any=result;
     if(res.success)
     {
      this.kiemtra = res.data;
      this.isEdit=true;
      setTimeout(() => {
        this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
      });
     }
     alert('Thêm thành công');
    
   }
   
 )
}
  Editkiemtra()
  {
   var x=this.kiemtra;
   
   this._api.post('/api/Kiemtra/Suacong',x).subscribe(res => {
    if(res.success)
    {
     this.kiemtra = res.data;
    
     this.isEdit=true;
     setTimeout(() => {
      this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
    });
    
    }
    
    alert('Sửa thành công');
   
  }
 )}
 public loadData(pageSize:any) {
  this.pageSize = pageSize;
  this._route.params.subscribe(params => {
  this.id = params['id'];
   this._api.post('/api/Kiemtra/searchs', { loc: this.loc, page: 1, pageSize: pageSize, Id: this.id }).subscribe(res => {
     this.list_item = res.data;
     this.totalItem = res.totalItems;
     setTimeout(() => {
      this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
    });
   });
  });
}
  
}
