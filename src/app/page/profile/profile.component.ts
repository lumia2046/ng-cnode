import { Component, OnInit,AfterContentInit,AfterContentChecked } from '@angular/core';
import { Router } from '@angular/router'
import { LoginService } from '../login/login.service';
import { UserInfo } from '../../interface/UserInfo';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit,AfterContentInit,AfterContentChecked {

  // userInfo: UserInfo = this.loginService.userInfo;

  constructor(protected loginService: LoginService, private router: Router) { }

  ngOnInit() {

  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit')
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked')
  }

  goToUser() {
    this.router.navigateByUrl(`/user/${this.loginService.userInfo.loginname}`)
  }

}
