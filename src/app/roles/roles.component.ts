import { Component, OnInit } from '@angular/core';
import { RolesService } from '../services/roles.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  constructor(private _roleService: RolesService, private _Activatedroute:ActivatedRoute, private router: Router) { 
    
  }

  selected: boolean;
  accessToken:string;
  serviceId: string;
  name: string;
  displayName: string;
  description: string;
  onAccess: boolean;
  visible: boolean;
  type:string;
  composable:boolean; 
  bundled:boolean;
  

  ngOnInit(): void {
    this._Activatedroute.queryParams.subscribe(params => {
      this.accessToken=params ['id'];
      console.log(this.accessToken);
})
  }

  createRole(): void {
    this._roleService.createRoleService(this.serviceId, this.name, this.displayName, this.description, this.onAccess, this.visible, this.type, this.composable, this.bundled, this.accessToken )
    .subscribe({
      next:data => {
        // this.openDialog();
        alert("Role created successfully");
        console.log(data);
        this.router.navigate(["dashboard"]);
      },
      error:error => {
        console.log(error);
         alert("There was a problem in creating the role. Please enter valid data.");
      }
    }
    )
  }
}