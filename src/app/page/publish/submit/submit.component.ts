import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import { SubmitService } from './submit.service';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {
  @Input() title: string;
  @Input() classify: string;
  @Input() content: string;

  constructor(private service: SubmitService,private router:Router) { }

  ngOnInit() {
  }

  submit() {
    this.service.submit(this.title, this.classify, this.content).subscribe(data => {
      if (data.success) {
        this.router.navigateByUrl(`/home/${this.classify}`)
      }
    })
  }

}
