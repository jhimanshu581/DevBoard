import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urls } from './urls';
import { CookiesService } from './cookies.service';

@Injectable({
  providedIn: 'root'
})
export class JenkinsService {

  constructor(private http: HttpClient, private _cookie :CookiesService) { }

  onBoardingGroup(groupName: string, isRedis: string, isKafka: string, isMongodb: string){

    let formdata = new FormData();
    formdata.append('GITLAB_GROUP',groupName);
    formdata.append('redis',isRedis);
    formdata.append('kafka',isKafka);
    formdata.append('mongodb',isMongodb);
    return this.http.post(urls.groupOnboarding, formdata,{
      headers : {
        'Authorization' : 'Basic ' + btoa(this._cookie.getCookie("JenkinId")+":"+this._cookie.getCookie("JenkinToken"))
      }
    });
  }

  onBoardingService(groupName: string, projectName: string, javaPackage: string, archType: string){
    let formdata = new FormData();
    formdata.append('GITLAB_GROUP',groupName);
    formdata.append('PROJECT_NAME',projectName);
    formdata.append('JAVA_PACKAGE',javaPackage);
    formdata.append('ARCHETYPE_TYPE',archType);
    return this.http.post(urls.serviceOnboarding, formdata,{
      headers : {
        'Authorization' : 'Basic ' + btoa(this._cookie.getCookie("JenkinId")+":"+this._cookie.getCookie("JenkinToken"))
      }
    });
  }
}
