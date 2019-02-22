import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class SubmitService {
  constructor(private loginService: LoginService, private http: HttpClient) { }

  submit(title: string, tab: string, content: string): Observable<any> {
    return this.http.post(`topics`, { title, tab, content, accesstoken: this.loginService.userInfo.token })
  }

}
