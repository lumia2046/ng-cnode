import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInfo } from '../../interface/UserInfo';
import * as querystring from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl = 'https://cnodejs.org/api/v1';

  userInfo: UserInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

  constructor(private http: HttpClient) { }

  fetchUserInfo(accesstoken: string): Observable<UserInfo> {
    return this.http.post<UserInfo>(`${this.baseUrl}/accesstoken`, { accesstoken })
  }

  setUserInfo(info: UserInfo): void {
    this.userInfo = info;
    localStorage.setItem('userInfo', JSON.stringify(info));
  }

  clearUserInfo() {
    this.userInfo = null;
    localStorage.removeItem('userInfo');
  }
}
