import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';

import { User } from 'src/app/enti/User';
import { environment } from 'src/app/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
private userSubject: BehaviorSubject<any>;
//private timeSubject: BehaviorSubject<any>;
public user: Observable<User>;
//public time: Observable<Time>;

constructor(
    private router: Router,
    private http: HttpClient
) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user') || '{}'));
    this.user = this.userSubject.asObservable();
}

public get userValue(): User {
    return this.userSubject.value && this.userSubject.value.token ? this.userSubject.value: null;
   
}

login(taikhoan: string, password: string) {
    return this.http.post<any>(`${environment.BASE_API}/api/User/login`, { taikhoan, password })
        .pipe(map(user => {
            localStorage.setItem('user', JSON.stringify(user));
            this.userSubject.next(user);
            return user;
        }));
}

logout() {
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/login']);
}

remove() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    this.userSubject.next(null);
}
}