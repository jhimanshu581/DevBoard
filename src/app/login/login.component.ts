import { Component, OnInit } from '@angular/core';
import { CookiesService } from '../services/cookies.service';
import { GitlabService } from '../services/gitlab.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private _cookies: CookiesService) { }

  jenkinId: string;
  jenkinToken: string;
  gitlabToken: string;

  ngOnInit(): void {
  }

  login() : void {
    this._cookies.removeCookie();
    if(this.jenkinId.length!=0 && this.jenkinToken.length!=0 && this.gitlabToken.length !=0){
      this._cookies.setCookie("JenkinId", this.jenkinId);
      this._cookies.setCookie("JenkinToken", this.jenkinToken);
      this._cookies.setCookie("GitlabToken", this.gitlabToken);
      this.router.navigate(["home"]);
     }else {
       alert("Invalid credentials");
     }
   }
   }
