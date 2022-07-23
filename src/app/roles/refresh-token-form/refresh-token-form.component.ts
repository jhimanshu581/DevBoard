import { Component, OnInit } from '@angular/core';
import { RefreshTokenService } from 'src/app/services/refreshtoken.service';

@Component({
  selector: 'app-refresh-token-form',
  templateUrl: './refresh-token-form.component.html',
  styleUrls: ['./refresh-token-form.component.scss']
})
export class RefreshTokenFormComponent implements OnInit {

  constructor(private _refreshToken: RefreshTokenService) { }

  refreshToken: string;

  ngOnInit(): void {
  }

  generateAccessToken(): void{
    this._refreshToken.generateToken(this.refreshToken).subscribe(data=>{console.log(data);})
  }
}
