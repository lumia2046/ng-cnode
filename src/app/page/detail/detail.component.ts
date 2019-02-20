import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DetailService} from './detail.service';
import {TopicItem} from '../../interface/TopicItem'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  detail:TopicItem;
  title:string='加载中';

  constructor(private route:ActivatedRoute,private service:DetailService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getDetail(id).subscribe(data=>{
      this.detail = data['data'];
      this.title=this.detail.title;
    })

  }


}
