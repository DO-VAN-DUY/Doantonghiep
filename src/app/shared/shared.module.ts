import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { SlidebarComponent } from './layout/slidebar/slidebar.component';
import { RouterModule } from '@angular/router';
import { DatePipe } from './layout/header/date.pipe';
import { HeadernvComponent } from './layoutnv/headernv/headernv.component';
import { MenuComponent } from './layoutnv/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
@NgModule({
  declarations: [
    HeaderComponent,
    SlidebarComponent,
    DatePipe,
    HeadernvComponent,
    MenuComponent,
   
   
  ],
  exports: [HeaderComponent,
    SlidebarComponent,
    HeadernvComponent,
    MenuComponent],
  imports: [
    
  FormsModule,
    CommonModule,
    RouterModule,
    CKEditorModule,

  ]
})
export class SharedModule { }
