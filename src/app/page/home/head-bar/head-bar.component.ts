import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { LinkItem } from '../../../interface/LinkItem';

@Component({
  selector: 'app-head-bar',
  templateUrl: './head-bar.component.html',
  styleUrls: ['./head-bar.component.css']
})
export class HeadBarComponent implements OnInit {
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
      link: 'exchange',
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
    console.log(this.route.params)
    //this.route.queryParamMap.pipe(map(params => params.get('session_id') || 'None'))
    // this.route.queryParamMap.subscribe((params:Params)=>{
    //   console.log(params)
    //   this.activeLink = params["tabName"]
    // })
    // this.route.paramMap.pipe(switchMap((params: ParamMap) => {
    //   this.activeLink = params.get('tabName')
    //   return true
    // })
    // );
    // console.log(this.route.snapshot.paramMap)
    this.activeLink = this.route.snapshot.paramMap.get('tabName')
  }

  setActive(link: string) {
    this.activeLink = link;
  }

}
