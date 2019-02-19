import { Component, OnInit, Input } from '@angular/core';
import { TopicItem } from '../../../../interface/TopicItem'

const tag = {
  good: '#精华#',
  share: '#分享#',
  ask: '#问答#',
  job: '#招聘#',
  dev: '#测试#',
}

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() info: TopicItem;
  constructor() { }

  ngOnInit() {
    this.info.tag = tag[this.info.tab]
  }

}
