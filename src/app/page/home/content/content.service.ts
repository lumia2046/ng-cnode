import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as querystring from 'querystring';
import { TopicItem } from '../../../interface/TopicItem'

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private baseUrl = 'https://cnodejs.org/api/v1/topics'

  constructor(private http: HttpClient) { }

  getTopics(params: object): Observable<TopicItem[]> {
    return this.http.get<TopicItem[]>(`${this.baseUrl}?${querystring.stringify(params)}`)
  }

}
