import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { urls } from './urls';

@Injectable({
    providedIn: 'root'
})

export class RefreshTokenService {

    constructor(private http: HttpClient) { }

    generateToken(refreshToken: string) {
         const headers = new HttpHeaders()
             .set('Content-type', 'application/x-www-form-urlencoded');

         const body = {
             refresh_token: 'refreshToken'
         }

         return this.http
                    .post(urls.generateAccessToken, body, { headers: headers })
                    .subscribe(res => res.toString);
    }       
}