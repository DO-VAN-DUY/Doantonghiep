import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const loginRoutes: Routes = [
  {
     path: '',redirectTo:'login',pathMatch:'full',
     
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(
      loginRoutes
      ),
   ],
    exports:[
      RouterModule
    ]  
})

export class LoginroutingMudule { }
