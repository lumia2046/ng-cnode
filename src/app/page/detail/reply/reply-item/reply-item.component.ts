import { Component, OnInit, Input } from '@angular/core';
import { ReplyItem } from '../../../../interface/ReplyItem';
import {Router} from '@angular/router';

@Component({
  selector: 'app-reply-item',
  templateUrl: './reply-item.component.html',
  styleUrls: ['./reply-item.component.css']
})
export class ReplyItemComponent implements OnInit {
  @Input() item: ReplyItem;
  @Input() index: number;
  showReply: boolean;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  changeShowReply(){
    this.showReply = !this.showReply
  }

  imgClick(name){
    this.router.navigateByUrl(`/user/${name}`)
  }

}
