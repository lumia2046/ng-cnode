import { Component, OnInit, Input } from '@angular/core';
import {TopicItem} from '../../../interface/TopicItem'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() detail:TopicItem;

  constructor() { }

  ngOnInit() {
    
  }

}
