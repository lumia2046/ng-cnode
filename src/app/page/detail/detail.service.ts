import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TopicItem} from '../../interface/TopicItem'

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  protected detail:TopicItem;

  constructor(private http:HttpClient) { }

  getDetail(id:string):void{
    this.http.get<TopicItem>(`topic/${id}`).subscribe(data=>{
      this.detail = data['data'];
    })
  }
}
