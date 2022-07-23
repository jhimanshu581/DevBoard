import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urls } from './urls';
import { CookiesService } from './cookies.service';

@Injectable({
    providedIn: 'root'
})

export class RolesService {

    constructor(private http: HttpClient, private _cookie :CookiesService) { }
  
    createRoleService(serviceId: string, name: string, displayName: string, description:string, permissions:string, onAccess: string, visible: string, type:string, composable:string, bundled:string ){
      let formdata = new FormData();
      formdata.append('SERVICE ID',serviceId);
      formdata.append('NAME', name);
      formdata.append('DISPLAY NAME', displayName);
      formdata.append('DESCRIPTION', description);
      formdata.append('PERMISSIONS', permissions);
      formdata.append('On Access', onAccess);
      formdata.append('Visible', visible);
      formdata.append('TYPE', type);
      formdata.append('Composable',composable);
      formdata.append('Bundled', bundled);
      return this.http.post(urls.createRole, formdata);
    }
  }


