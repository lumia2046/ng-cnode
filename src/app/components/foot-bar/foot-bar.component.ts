import { Component, OnInit } from '@angular/core';
import { LinkItem } from '../../interface/LinkItem';

@Component({
  selector: 'app-foot-bar',
  templateUrl: './foot-bar.component.html',
  styleUrls: ['./foot-bar.component.css']
})
export class FootBarComponent implements OnInit {
  activeLink = '/home'

  items: LinkItem[] = [
    {
      link: '/home',
      title: '首页',
    },
    {
      link: '/publish',
      title: '发表',
    },
    {
      link: '/profile',
      title: '我的',
    },
  ]
  constructor() { }

  ngOnInit() {
  }

  setActive(link: string): void {
    this.activeLink = link
  }

}
