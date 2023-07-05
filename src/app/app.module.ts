
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppRoute } from './app.route';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { LoginModule } from './login/login.module';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';

@NgModule({
    declarations: [
        AppComponent,
        NotFoundComponentComponent, 
    ],
   
    bootstrap: [AppComponent],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        LoginModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forRoot(AppRoute),
        NgbModule, 
       
    ]
})
export class AppModule { }
