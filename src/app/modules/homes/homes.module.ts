import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChartModule } from 'angular2-chartjs';
import { IndexComponent } from './index/index.component';
import { PhongbanComponent } from './phongban/phongban.component';
import { TonhomComponent } from './tonhom/tonhom.component';
import { NhanvienComponent } from './nhanvien/nhanvien.component';
import { KiemtraComponent } from './kiemtra/kiemtra.component';
import { ChinhanhComponent } from './chinhanh/chinhanh.component';
import { LuongthuongComponent } from './luongthuong/luongthuong.component';
import { AppComponent } from 'src/app/app.component';
import { NvvaomuonComponent } from './nvvaomuon/nvvaomuon.component';
import { NvrasomComponent } from './nvrasom/nvrasom.component';
import { UserComponent } from './user/user.component';
import { TimeComponent } from './time/time.component';
import { CheckroleGuard } from 'src/app/core/guard/checkrole.guard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { BacluongComponent } from './bacluong/bacluong.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MiennhiemComponent } from './miennhiem/miennhiem.component';
import { BonhiemComponent } from './bonhiem/bonhiem.component';
import { ThuyenchuyenComponent } from './thuyenchuyen/thuyenchuyen.component';
import { HopdongComponent } from './hopdong/hopdong.component';
import { PhucapComponent } from './phucap/phucap.component';
import { TrinhdoComponent } from './trinhdo/trinhdo.component';
import { KhenthuongComponent } from './khenthuong/khenthuong.component';
import { DieudongComponent } from './dieudong/dieudong.component';
import { LuongnvComponent } from './luongnv/luongnv.component';


@NgModule({
  declarations: [
    IndexComponent,
    PhongbanComponent,
    TonhomComponent,
    NhanvienComponent,
    KiemtraComponent,
    ChinhanhComponent,
    LuongthuongComponent,
    NvvaomuonComponent,
    NvrasomComponent,
    UserComponent,
    TimeComponent,
    BacluongComponent,
    MiennhiemComponent,
    BonhiemComponent,
    ThuyenchuyenComponent,
    HopdongComponent,
    PhucapComponent,
    TrinhdoComponent,
    KhenthuongComponent,
    DieudongComponent,
    LuongnvComponent,
    
   
  
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
   ChartModule,
   Ng2SearchPipeModule,
    CKEditorModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { 
        canActivate:[CheckroleGuard],
        data:
        {
          role:['Quan tri du an','Nhan vien'],
        },
        path: 'index', component: IndexComponent
       },
      { 
        canActivate:[CheckroleGuard],
        data:
        {
          role:['Quan tri du an','Nhan vien'],
        },
        path: 'phongban', component: PhongbanComponent,
      
      },
      {
        // canActivate:[HomesGuard],
        canActivate:[CheckroleGuard],
        data:
        {
          role:['Quan tri du an','Nhan vien'],
        },
         path: 'tonhom', component: TonhomComponent,
        },
      { 
        canActivate:[CheckroleGuard],
        data:
        {
          role:['Quan tri du an','Nhan vien'],
        },
        path: 'nhanvien', component: NhanvienComponent ,
      
      },
      {
        canActivate:[CheckroleGuard],
        data:
        {
          role:['Quan tri du an'],
        },
         path: 'kiemtra', component: KiemtraComponent,
       
      },
      {
        canActivate:[CheckroleGuard],
        data:
        {
          role:['Quan tri du an','Nhan vien'],
        },
         path: 'chinhanh', component: ChinhanhComponent,  
      },
      { 
        canActivate:[CheckroleGuard],
        data:
        {
          role:['Quan tri du an'],
        },
        path: 'luongthuong', component: LuongthuongComponent,
       
      },
      {
        canActivate:[CheckroleGuard],
        data:
        {
          role:['Quan tri du an'],
        },
         path: 'nvvaomuon', component:NvvaomuonComponent,
        
        },
      {
        canActivate:[CheckroleGuard],
        data:
        {
          role:['Quan tri du an'],
        },
         path: 'nvrasom', component: NvrasomComponent,
         
        },
      { 
        canActivate:[CheckroleGuard],
        data:
        {
          role:['Quan tri du an'],
        },
        path: 'users', component: UserComponent ,
      
    },
      { 
        canActivate:[CheckroleGuard],
        data:
        {
          role:['Quan tri du an'],

        },
        path: 'times', component: TimeComponent,
     
     },

     { 
      canActivate:[CheckroleGuard],
      data:
      {
        role:['Quan tri du an'],

      },
      path: 'bacluong', component: BacluongComponent,
   
   },
   { 
    canActivate:[CheckroleGuard],
    data:
    {
      role:['Quan tri du an','Nhan vien'],
    },
    path: 'miennhiem', component: MiennhiemComponent,
  
  },
  { 
    canActivate:[CheckroleGuard],
    data:
    {
      role:['Quan tri du an','Nhan vien'],
    },
    path: 'bonhiem', component: BonhiemComponent,
  
  },
  { 
    canActivate:[CheckroleGuard],
    data:
    {
      role:['Quan tri du an','Nhan vien'],
    },
    path: 'hopdong', component: HopdongComponent,
  
  },
  { 
    canActivate:[CheckroleGuard],
    data:
    {
      role:['Quan tri du an','Nhan vien'],
    },
    path: 'khenthuong', component: KhenthuongComponent,
  
  },
  { 
    canActivate:[CheckroleGuard],
    data:
    {
      role:['Quan tri du an','Nhan vien'],
    },
    path: 'phucap', component: PhucapComponent,
  
  },
  { 
    canActivate:[CheckroleGuard],
    data:
    {
      role:['Quan tri du an','Nhan vien'],
    },
    path: 'thuyenchuyen', component: ThuyenchuyenComponent,
  
  },
  { 
    canActivate:[CheckroleGuard],
    data:
    {
      role:['Quan tri du an','Nhan vien'],
    },
    path: 'trinhdo', component: TrinhdoComponent,
  
  },
  { 
    canActivate:[CheckroleGuard],
    data:
    {
      role:['Quan tri du an','Nhan vien'],
    },
    path: 'dieudong', component: DieudongComponent,
  
  },
    ])
  ],
  bootstrap: [ AppComponent ]
})
export class HomesModule { }
