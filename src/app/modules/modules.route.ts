import { Routes } from '@angular/router';
import { HomesGuard } from '../core/guard/homes.guard';
import { IndexComponent } from './homes/index/index.component';
import { ModulesComponent } from './modules.component';
export const modulesRoutes: Routes = [
  {
      path: '', component: ModulesComponent,
      children: 
      [
        { path: 'homes', loadChildren: () => import('./homes/homes.module').then(m => m.HomesModule),canActivate:[HomesGuard]},
        { path: 'staff', loadChildren: () => import('./staff page/staff.module').then(m => m.StaffModule),canActivate:[HomesGuard]},
      ]
  }
];
