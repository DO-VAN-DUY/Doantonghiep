import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StaffRoutes } from './staff.route';
import { StaffComponent } from './staff.component';




@NgModule({
  declarations: [
    StaffComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    RouterModule.forChild(StaffRoutes)
  ]
})
export class StaffModule { }
