import { Routes } from '@angular/router';
import { StaffComponent } from './staff.component';
// import { IndexComponent } from './homes/index/index.component';
// import { ModulesComponent } from './modules.component';
export const StaffRoutes: Routes = [
  {
      path: '', component: StaffComponent ,
      children: [
      
        { path: 'nhanvien', loadChildren: () => import('./nhanvien/nhanvien.module').then(m => m.NhanvienModule)},
        
      ]
  }
];
