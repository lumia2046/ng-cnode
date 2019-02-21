import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from './login.service';
import {Location} from '@angular/common';
import {Router} from '@angular/router'
// import { UserInfo } from '../../interface/UserInfo';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token: string;
  message: string;

  constructor(private service: LoginService,private location:Location,private router:Router) { }

  ngOnInit() {
    if(this.service.userInfo){
      this.router.navigateByUrl('/profile')
    }
  }

  submit() {
    this.service.fetchUserInfo(this.token).subscribe(data => {
      if (data.success) {
        this.message = null
        this.service.setUserInfo({...data,token:this.token})
        // this.location.back()
        this.router.navigateByUrl('/profile')
      } else {
        this.message = '登录失败'
      }
    })
  }


}
