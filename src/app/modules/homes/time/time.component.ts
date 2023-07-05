import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { BaseComponent } from 'src/app/core/common/base-component';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent extends BaseComponent implements OnInit {
  @ViewChild('Form')
  Form:NgForm | undefined;
  public list_item:any;
  Time: any={
    "id": 0,
    "giovao": "" ,
    "giora": "",
    
  };
  Time1!: {};
  constructor( injector: Injector,private _api : ApiService) {
    super(injector);
   }

  ngOnInit(): void {
    this._api.get('/api/Times/hienthi').subscribe(res => {
      this.list_item = res;
      let vao=new Date(res[0].giovao).toLocaleTimeString();
      let ra=new Date(res[0].giora).toLocaleTimeString();
      this.Time={
        "id": 0,
        "giovao": vao,
        "giora": ra
        
      };
      //debugger;
   
      
    });
  }
  time()  {
    const date= new Date();
    const date2= date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
   var x=this.Time;
   this.Time1={
    id:1,
    giovao:date2+'T'+x.giovao,
    giora:date2+'T'+ x.giora,  
     } 
    
  
     
   this._api.post('/api/Times/Suatime',this.Time1).subscribe(res => {
    if(res.success)
    {
      this.Time1= res.data;
     setTimeout(() => {
       this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
     });
    
    }
   
    alert('Sửa thành công');
   
  })
  console.log(this.Time1);
  
 }
 

}
