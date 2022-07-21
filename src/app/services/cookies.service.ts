import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  constructor(private _cookie: CookieService) { }

  setCookie(key: string, value: string){
    this._cookie.set(key,value);
  }

  getCookie(key: string): string{
    return this._cookie.get(key);
  }

  removeCookie(){
    this._cookie.deleteAll();
  }
}
