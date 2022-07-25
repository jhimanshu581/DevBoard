import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GitlabService } from '../services/gitlab.service';

@Component({
  selector: 'app-infra-dependency',
  templateUrl: './infra-dependency.component.html',
  styleUrls: ['./infra-dependency.component.scss']
})
export class InfraDependencyComponent implements OnInit {

  constructor(private _gitlab: GitlabService,private _http: HttpClient) { }

  groups:Map<string, number>
  selectedValue: string;
  groupName: String;

  ngOnInit(): void {
    this.groups = this._gitlab.getAllGroups();
  }

  groupChange(data: any){
    this.selectedValue = data.value;
    this.getGroupName();
  }

  getGroupName(){
    for(let group of this.groups){
      if((group[1]+"")==this.selectedValue){
        this.groupName = group[0];
      }
    }
  }

}
