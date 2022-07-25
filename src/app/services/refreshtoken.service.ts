import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { urls } from './urls';

@Injectable({
    providedIn: 'root'
})

export class RefreshTokenService {

    constructor(private http: HttpClient) { }

    generateToken(refreshToken: string) {
        let formdata = new FormData();
        formdata.append('refresh_token',refreshToken);
         console.log(refreshToken);
         return this.http.post(urls.generateAccessToken, formdata);
    }       
}