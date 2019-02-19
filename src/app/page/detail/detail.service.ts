import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TopicItem} from '../../interface/TopicItem'

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  private baseUrl='https://cnodejs.org/api/v1/'
  constructor(private http:HttpClient) { }

  getDetail(id:string):Observable<TopicItem>{
    return this.http.get<TopicItem>(`${this.baseUrl}/topic/${id}`)
  }
}
