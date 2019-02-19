import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { ContentService } from './content.service';
import { TopicItem } from '../../../interface/TopicItem'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  items: TopicItem[];

  constructor(private route: ActivatedRoute, private service: ContentService) { }

  ngOnInit() {
    this.getTopics()
  }

  getTopics(params: object = {}): void {
    console.log(params)
    this.service.getTopics(params).subscribe(data => {
      this.items = data["data"]
    })
  }

  test(a){
    console.log(a)
    this.service.getTopics({tab: 'good'}).subscribe(data => {
      this.items = data["data"]
    })
  }

}
