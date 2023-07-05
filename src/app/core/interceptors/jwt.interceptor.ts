
import { AuthenticationService } from './../authentication/authentication.service';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/app/environments/environment.prod';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    jwt = new JwtHelperService();
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if user is logged in and request is to api url

       const user = this.authenticationService.userValue;
        // const token = localStorage.getItem('user') || '';
        //  const user = this.jwt.decodeToken(token);
        
        
       const isLoggedIn = user && user.token;
        const isApiUrl = request.url.startsWith(environment.BASE_API);
        // if (isLoggedIn && isApiUrl && request.url.indexOf('api/upload/upload-single') == -1) {
     if (isLoggedIn && isApiUrl ) {
            request = request.clone({
                setHeaders: {
                    'Content-Type' : 'application/json; charset=utf-8',
                    'Accept'       : 'application/json',
                    'Authorization': `Bearer ${user.token}`
                  }
            });
        }

        return next.handle(request);
    }

     
}