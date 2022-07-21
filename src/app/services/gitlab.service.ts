import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urls } from './urls';
import { CookiesService } from './cookies.service';

@Injectable({
  providedIn: 'root'
})
export class GitlabService {

  constructor(private http: HttpClient, private _cookie :CookiesService) { }

  createGitlabGroup(groupName: string){
      return this.http.post(urls.gitLabCreateGroupURL, {
      name : groupName,
      path : groupName
    },{headers : {
      'PRIVATE-TOKEN' : this._cookie.getCookie("GitlabToken")}
    });
  }

  addBotAsMemberToGroup(groupId : number){
    var groupURL = urls.gitLabAddBotURL;   
    return this.http.post(groupURL.replace('{group-id}',groupId+''),{
      access_level : 50,
      user_id : 11704
    },{headers : {
      'PRIVATE-TOKEN' : this._cookie.getCookie("GitlabToken")}
    });
  }

}
