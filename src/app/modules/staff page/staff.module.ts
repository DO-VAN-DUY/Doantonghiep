import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from 'src/app/app.component';

import { CheckroleGuard } from 'src/app/core/guard/checkrole.guard';

import { LltnComponent } from './lltn/lltn.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaocaoComponent } from './baocao/baocao.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { LuongnvComponent } from '../homes/luongnv/luongnv.component';
@NgModule({
  declarations: [
    LltnComponent, 
    BaocaoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    CKEditorModule,
    ReactiveFormsModule,
    RouterModule.forChild([
     {
      canActivate:[CheckroleGuard],
      data:
      {
        role:['Nhan vien'],
      },
       path: 'thongtinnv', component:LltnComponent,
     },
     {
      canActivate:[CheckroleGuard],
      data:
      {
        role:['Nhan vien'],
      },
       path: 'baocao', component:BaocaoComponent,
     },
     {
      canActivate:[CheckroleGuard],
      data:
      {
        role:['Nhan vien'],
      },
       path: 'luongnv', component:LuongnvComponent,
     }
    ])
  ],
  bootstrap: [ AppComponent ]
})
export class StaffModule { }
