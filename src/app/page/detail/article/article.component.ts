import { Component, OnInit, Input } from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {TopicItem} from '../../../interface/TopicItem';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() detail:TopicItem;

  constructor(private location:Location,private router:Router) { }

  ngOnInit() {

  }

  imgClick(name){
    this.router.navigateByUrl(`/user/${name}`)
  }

}
