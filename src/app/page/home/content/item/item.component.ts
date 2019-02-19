import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'
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
  constructor(private router: Router) { }

  ngOnInit() {
    this.info.tag = tag[this.info.tab]
  }

  handleClick() {
    this.router.navigateByUrl(`/detail/${this.info.id}`)
  }

}
