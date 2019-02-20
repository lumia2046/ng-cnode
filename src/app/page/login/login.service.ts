import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserInfo} from '../../interface/UserInfo';
import * as querystring from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl='https://cnodejs.org/api/v1';
  userInfo:UserInfo;

  constructor(private http:HttpClient ) {}

  getUserInfo(accesstoken:string):Observable<UserInfo>{
    return this.http.post<UserInfo>(`${this.baseUrl}/accesstoken`,{accesstoken})
  }
}
