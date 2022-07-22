import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CookiesService } from './services/cookies.service';

@Injectable({
  providedIn: 'root'
})
export class IsAccessibleGuard implements CanActivate {

  constructor(private _cookie: CookiesService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      var notAuth =  this._cookie.getCookie("JenkinId").length!=0&&this._cookie.getCookie("JenkinToken").length!=0&&this._cookie.getCookie("GitlabToken").length!=0;
      console.log(notAuth,this._cookie.getCookie("JenkinId"));
      if(notAuth==false){         
        this.router.navigate(['/login'])
        return false;
      }else{
        return true;
      }
  }
  
}
