import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { ContentService } from './content.service';
import { TopicItem } from '../../../interface/TopicItem'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @ViewChild('itemList') itemList;
  items: TopicItem[];
  loading: boolean = false;
  page: number = 1;

  constructor(private route: ActivatedRoute, private service: ContentService) { }

  ngOnInit() {
    const link = this.route.snapshot.paramMap.get('tabName')
    this.getTopics({ tab: link === 'all' ? null : link })
    this.itemList.nativeElement.onscroll = e => {
      const { scrollTop, scrollHeight, offsetHeight } = e.target
      if (scrollTop + offsetHeight > scrollHeight - 100 && !this.loading) {
        const link = this.route.snapshot.paramMap.get('tabName')
        this.getTopics({ tab: link === 'all' ? null : link, page: ++this.page }, true)
      }
    }
  }

  getTopics = (params: object = {}, add?: boolean): void => {
    if(!add){
      this.loading = true
    }

    this.service.getTopics(params).subscribe(data => {
      this.loading = false
      if(add){
        this.items = [...this.items,...data["data"]]
      }else{
        this.items = [...data["data"]]
      }

    })
  }



}
