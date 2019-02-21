import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class SubmitService {
  baseUrl = 'https://cnodejs.org/api/v1'
  constructor(private loginService: LoginService, private http: HttpClient) { }

  submit(title: string, tab: string, content: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/topics`, { title, tab, content, accesstoken: this.loginService.userInfo.token })
  }

}
