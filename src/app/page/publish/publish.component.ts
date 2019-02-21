import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service'
import { LinkItem } from '../../interface/LinkItem';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.css']
})
export class PublishComponent implements OnInit {
  items: LinkItem[] = [
    {
      link: 'dev',
      title: '测试'
    },
    {
      link: 'share',
      title: '分享'
    },
    {
      link: 'ask',
      title: '问答'
    },
    {
      link: 'job',
      title: '招聘'
    },
  ];

  title: string;
  content: string;
  classify: string='dev';

  constructor(protected loginService: LoginService) { }

  ngOnInit() {

  }

  handleSelect(value) {
    this.classify = value
  }

}
