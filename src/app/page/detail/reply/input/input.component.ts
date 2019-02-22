import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../../../login/login.service'
import { InputService } from './input.service';
import { DetailService } from '../../detail.service'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  content: string;

  @Input() replyId: string;

  constructor(protected loginService: LoginService, private service: InputService, private route: ActivatedRoute, private detailService: DetailService) { }

  ngOnInit() {

  }

  submit() {
    this.service.sendReply(this.route.snapshot.paramMap.get('id'), this.content, this.replyId).subscribe(data => {
      if (data.success) {
        this.detailService.getDetail(this.route.snapshot.paramMap.get('id'));
        this.content = null;
      }
    })
  }

}
