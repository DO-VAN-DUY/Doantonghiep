import { Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';
import { HomesGuard } from './core/guard/homes.guard';
import { DangkyComponent } from './login/dangky/dangky.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { FgpassComponent } from './login/Quenmatkhau/fgpass/fgpass.component';
export const AppRoute: Routes = [
  {path:'login', component:LoginComponent ,canActivate:[AuthGuard]},
  {path:'register', component:DangkyComponent , canActivate:[AuthGuard]},
  {path:'quenmatkhau', component:FgpassComponent ,canActivate:[AuthGuard]},
 { path: '', loadChildren: () => import('./modules/modules.module').then(m => m.ModulesModule)},
  { path: 'not-found', component: NotFoundComponentComponent },
  { path: '**', redirectTo:'not-found', pathMatch:'full'}

];
