import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DetailService} from './detail.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private route:ActivatedRoute,protected service:DetailService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getDetail(id);
  }


}
