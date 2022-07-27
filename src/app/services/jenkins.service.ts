import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urls } from './urls';
import { CookiesService } from './cookies.service';
import { Observable } from 'rxjs';

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
      },
      observe: 'response'
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
         'Authorization' : 'Basic ' + btoa(this._cookie.getCookie("JenkinId")+":"+this._cookie.getCookie("JenkinToken")),        
       },
       observe: 'response'
    });
  }

  getAllBuilds(jobName: string){
    return this.http.get(urls.getAllBuildsOfSpecifiedJob.replace("{job-name}",jobName));
  }

  getConsoleOutput(jobName:string, buildId: string){
    let url = urls.getFullConsoleOutput;
    url = url.replace("{job-name}",jobName);
    url = url.replace("{build-id}",buildId);
    return this.http.get(url,{ responseType: 'text' });
  }

  getJobIdandResult(jobName: string, queueId: string){
    // var temp= queueId.match(/(\d+)/);
     let url = urls.getJobIdFromQueueId;
    // url = url.replace("{job-name}",jobName);
    // url = url.replace("{queue-id}",temp?temp[temp?temp.length-1:0]:'');
    url = url.replace("{job-name}",jobName);
    
    return this.http.get(url);
  }
  
}
