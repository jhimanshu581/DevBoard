import { Component, OnInit } from '@angular/core';
import { RefreshTokenService } from 'src/app/services/refreshtoken.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-refresh-token-form',
  templateUrl: './refresh-token-form.component.html',
  styleUrls: ['./refresh-token-form.component.scss']
})
export class RefreshTokenFormComponent implements OnInit {

  constructor(private _refreshToken: RefreshTokenService, private router: Router) { }

  refreshToken: string;
  accessToken: string;

  ngOnInit(): void {
  }

  generateAccessToken(): void{
    this._refreshToken.generateToken(this.refreshToken)
    .subscribe({
      next:data=>{this.accessToken=JSON.parse(JSON.stringify(data))['access_token'];
        alert("Access token created successfully");
        this.router.navigate(["/roles"], { queryParams: { id : this.accessToken } });},
      error:error => {
        console.log(error);
          alert("There was a problem in creating the access token. Please enter valid refresh token.");
      }
  })

  }
}
