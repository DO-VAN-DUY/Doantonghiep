import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginroutingMudule } from './login.routing';
import { FormsModule } from '@angular/forms';
import { DangkyComponent } from './dangky/dangky.component';
import { FgpassComponent } from './Quenmatkhau/fgpass/fgpass.component';




@NgModule({
  declarations: [
    UserComponent,
    LoginComponent,
    DangkyComponent,
    FgpassComponent
  ],
  imports: [
     FormsModule,
    CommonModule,
    RouterModule,
    LoginroutingMudule,
    
  ]
})
export class LoginModule { }
