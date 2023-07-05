import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThongtinComponent } from './thongtin/thongtin.component';
import { RouterModule } from '@angular/router';
import { AppComponent } from 'src/app/app.component';



@NgModule({
  declarations: [
    ThongtinComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'thongtin', component: ThongtinComponent },
     
    ])
  ],
  bootstrap: [ AppComponent ]
})
export class NhanvienModule { }
