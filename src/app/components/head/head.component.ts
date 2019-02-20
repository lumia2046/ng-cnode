import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  @Input() back: boolean;
  @Input() rightContent: string;
  @Input() title: string;

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back()
  }

}
