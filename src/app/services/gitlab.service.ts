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

  getAllGroups(): Map<string, number> {
    let groups = new Map<string, number>();

    let response = this.http.get( urls.getAllUserOwnedGroup, {headers : {
      'PRIVATE-TOKEN' : this._cookie.getCookie("GitlabToken")
    }});

    response.subscribe(data => {
      for(var d in data){
        groups.set(JSON.parse(JSON.stringify(data))[d]['full_path'],JSON.parse(JSON.stringify(data))[d]['id']);
      }
    })
    return groups;
  }

  getAllProjectsOfParticularGroup(groudId: string) {
    let projects = new Map<string, number>();

    let response = this.http.get( urls.getAllProjectOfParticularGroup.replace("{group-id}",groudId), {headers : {
      'PRIVATE-TOKEN' : this._cookie.getCookie("GitlabToken")
    }});

    response.subscribe(data => {
      for(var d in data){
        projects.set(JSON.parse(JSON.stringify(data))[d]['path'],JSON.parse(JSON.stringify(data))[d]['id']);
      }
    })
    return response;
  }

  getDependencies(projectId: string): string[] {
    let dependencies = new Array();
    let response = this.http.get( urls.getDependency.replace("{project-id}",projectId), {headers : {
      'PRIVATE-TOKEN' : this._cookie.getCookie("GitlabToken")
    }}).subscribe(data =>{
      for(var d in data){
        dependencies.push(JSON.parse(JSON.stringify(data))[d]['path']);
      }
    });
    
    return dependencies;
  }

  addDependencies(groupName: string, groupId: string, isKafka: boolean, isRedis: boolean, isMongodb: boolean, commonServicesExist: boolean){

    if(!commonServicesExist){
        this.http.post(urls.addCommonService, {
          "name": "common-services", "description": "Addition of common-services", "path": "common-services", "namespace_id": groupId, "initialize_with_readme": "false"
        },{headers : {
          'PRIVATE-TOKEN' : this._cookie.getCookie("GitlabToken")
        }}).subscribe(data => console.log(data));
    }

    return this.http.post("http://127.0.0.1:3000/infra-dependency", {
      "groupName": groupName,
      "kafka": isKafka,
      "redis": isRedis,
      "mongodb": isMongodb,
      "commonServicesExist": commonServicesExist
    },{headers : {
      'PRIVATE-TOKEN' : this._cookie.getCookie("GitlabToken")
    }}).subscribe(data => console.log(data));
    
  }
}
