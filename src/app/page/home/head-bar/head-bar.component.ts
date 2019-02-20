import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { LinkItem } from '../../../interface/LinkItem';

@Component({
  selector: 'app-head-bar',
  templateUrl: './head-bar.component.html',
  styleUrls: ['./head-bar.component.css']
})
export class HeadBarComponent implements OnInit {
  @Input() getTopics: Function;
  @Input() test: Function;

  items: LinkItem[] = [
    {
      link: 'all',
      title: '全部'
    },
    {
      link: 'good',
      title: '精华'
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
    {
      link: 'dev',
      title: '测试'
    },
  ];

  activeLink = 'all';


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.paramMap)
    //this.route.queryParamMap.pipe(map(params => params.get('session_id') || 'None'))
    // this.route.queryParamMap.subscribe((params: Params) => {
    //   console.log(params)
    //   // this.activeLink = params["tabName"]
    // })
    // this.route.paramMap.pipe(switchMap((params: ParamMap) => {
    //   this.activeLink = params.get('tabName')
    //   return null
    // })
    // );
    // console.log(this.route.snapshot.paramMap)
    this.activeLink = this.route.snapshot.paramMap.get('tabName')
  }

  setActive(link: string) {
    this.activeLink = link;
    this.getTopics({ tab: link === 'all' ? null : link })

  }


}
