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
  loading: boolean = false;

  constructor(private route: ActivatedRoute, private service: ContentService) { }

  ngOnInit() {
    this.getTopics()
  }

  getTopics = (params: object = {}): void => {
    this.loading = true
    this.service.getTopics(params).subscribe(data => {
      this.loading = false
      this.items = data["data"]
    })
  }



}
