import { Component, OnInit, Input} from '@angular/core';
import {ReplyItem} from '../../../interface/ReplyItem';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit {
  @Input() replies:ReplyItem[];
  constructor() { }

  ngOnInit() {
  }

}
