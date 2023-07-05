
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {map } from 'rxjs/operators';
import { environment } from 'src/app/environments/environment.prod';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    public host = environment.BASE_API;
    constructor(private _http: HttpClient, public router: Router, private authenticationService: AuthenticationService) {

    }
    findIndex(arg0: string) {
      throw new Error('Method not implemented.');
    }
    splice(index: Observable<any>, arg1: number) {
      throw new Error('Method not implemented.');
    }
    delete(arg0: string) {
      throw new Error('Method not implemented.');
    }
    public post(url: string, obj: any) {
        const body = JSON.stringify(obj);
        let cloneHeader: any = {};
        cloneHeader['Content-Type'] = 'application/json';
        const headerOptions = new HttpHeaders(cloneHeader);
        return this._http
            .post<any>(this.host + url, body, { headers: headerOptions })
            .pipe(
                map((res: any) => {
                    return res;
                })
            );
    }
    public get(url: string) {
        let cloneHeader: any = {};
        cloneHeader['Content-Type'] = 'application/json';
        const headerOptions = new HttpHeaders(cloneHeader);

        return this._http
            .get(this.host + url, { headers: headerOptions })
            .pipe(
                map((res: any) => {
                    return res;
                })
            );

    }
    public uploadFileSingle(url: string,file: Blob) {
        const user = this.authenticationService.userValue;   
       
        const formData = new FormData();  
        formData.append('file', file);   
        //  formData.append('folder', folder);    
        let cloneHeader: any = {};   
        cloneHeader['Authorization'] = `Bearer ${user.token}`;   
        return this._http.post(this.host + url, formData, { headers: new HttpHeaders(cloneHeader), reportProgress: true, observe: 'events' })
    }
    public uploadFileMulti(url: string, ...file: Blob[]) {
        const user = this.authenticationService.userValue;
        const formData = new FormData();
        file.forEach(x => {
            formData.append('files', x);
        });
       // formData.append('folder', folder);
        let cloneHeader: any = {};
        cloneHeader['Authorization'] = `Bearer ${user.token}`;
        return this._http.post(this.host + url, formData, { headers: new HttpHeaders(cloneHeader), reportProgress: true, observe: 'events' })
    }
}
