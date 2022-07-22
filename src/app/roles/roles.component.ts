import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  constructor() { }

  selected: boolean;
  serviceId: string;
  name: string;
  displayName: string;
  description: string;
  permissions: string;
  onAccess: boolean;
  visible: boolean;
  type:string;
  composable:boolean; 
  bundled:boolean;
  

  ngOnInit(): void {
  }

  createRole(): void {
  }
}