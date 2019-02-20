import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInfo } from '../../interface/UserInfo'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'https://cnodejs.org/api/v1/user';

  constructor(private http: HttpClient) { }

  getUserInfo(name: string): Observable<UserInfo> {
    return this.http.get<UserInfo>(`${this.baseUrl}/${name}`)
  }

}
