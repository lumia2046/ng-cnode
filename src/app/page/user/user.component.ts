import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from './user.service';
import { UserInfo } from '../../interface/UserInfo';
import { TopicItem } from '../../interface/TopicItem';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userInfo: UserInfo;
  items: TopicItem[];
  type: number = 0;

  constructor(private service: UserService, private route: ActivatedRoute, private location: Location,private router:Router) { }

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    this.service.getUserInfo(name).subscribe(data => {
      this.userInfo = data['data'];
      this.items = this.userInfo.recent_replies;
    })
  }

  handleClick(type) {
    this.type = type;
    if (type === 0) {
      this.items = this.userInfo.recent_replies;
    } else {
      this.items = this.userInfo.recent_topics;
    }
  }

  goToDetail(id){
    this.router.navigateByUrl(`/detail/${id}`)
  }

}
