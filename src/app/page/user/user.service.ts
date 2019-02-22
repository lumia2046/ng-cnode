import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInfo } from '../../interface/UserInfo'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserInfo(name: string): Observable<UserInfo> {
    return this.http.get<UserInfo>(`user/${name}`)
  }

}
