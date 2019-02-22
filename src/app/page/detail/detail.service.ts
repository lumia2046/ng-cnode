import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TopicItem} from '../../interface/TopicItem'

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  private baseUrl='https://cnodejs.org/api/v1/';
  protected detail:TopicItem;

  constructor(private http:HttpClient) { }

  getDetail(id:string):void{
    this.http.get<TopicItem>(`${this.baseUrl}/topic/${id}`).subscribe(data=>{
      this.detail = data['data'];
    })
  }
}
