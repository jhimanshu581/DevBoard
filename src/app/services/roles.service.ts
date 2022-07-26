import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urls } from './urls';

@Injectable({
    providedIn: 'root'
})

export class RolesService {

    constructor(private http: HttpClient) { }
  
    createRoleService(serviceId: string, name: string, displayName: string, description:string, onAccess: boolean, visible: boolean, type:string, composable:boolean, bundled:boolean, accessToken:string ){
      let formdata = new FormData();
      formdata.append('SERVICE ID',serviceId);
      formdata.append('name', name);
      formdata.append('displayName', displayName);
      formdata.append('description', description);
      formdata.append('onAccess', onAccess + '');
      formdata.append('visible', visible + '');
      formdata.append('type', type);
      formdata.append('composable',composable + '');
      formdata.append('bundled', bundled + '');
      
      const formDataObj: any = {};
      formdata.forEach((value, key) => (formDataObj[key] = value));
      var json = JSON.stringify(formDataObj);
      console.log(json); return 1;

      // return this.http.post(urls.createRole.replace('{serviceId}',serviceId+''), json,{
      //   headers : {
      //     'Authorization' : 'Bearer ' + accessToken
      //   }
      // });
    }
  }


