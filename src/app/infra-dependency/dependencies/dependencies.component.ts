import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { timeout } from 'rxjs';
import { GitlabService } from 'src/app/services/gitlab.service';

@Component({
  selector: 'app-dependencies',
  templateUrl: './dependencies.component.html',
  styleUrls: ['./dependencies.component.scss']
})
export class DependenciesComponent implements OnInit {

  @Input()
  groupId = '';
  @Input()
  groupName = '';
  dependencies = new Array(); 
  finalDependencies = ["mongodb","kafka","redis"];
  projects: Map<String,number> = new Map<string, number>();
  isKafka: boolean =false;
  isRedis: boolean =false;
  isMongodb: boolean =false;

  constructor(private _http: HttpClient, private _gitlab: GitlabService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void{
    this.projects.clear();
    let response= this._gitlab.getAllProjectsOfParticularGroup(this.groupId);

    response.subscribe(data => {
      for(var d in data){
        this.projects.set(JSON.parse(JSON.stringify(data))[d]['path'],JSON.parse(JSON.stringify(data))[d]['id']);
      }
      if(this.projects.has("common-services")){
        let res = this._gitlab.getDependencies(this.projects.get("common-services")+"");  
        const that = this;
        const myInterval = setInterval(function(){
          that.dependencies = that.finalDependencies.filter((element:string) => res.indexOf(element)==-1);          
        }.bind(res,that),1000);
        setTimeout(() => clearInterval(myInterval),3000);
      }else{
        this.dependencies = this.finalDependencies;
      }
      this.ngOnInit();      
    })
  }

  submit(){
    this._gitlab.addDependencies(this.groupName, this.groupId, this.isKafka,this.isRedis,this.isMongodb,this.dependencies.length!=3);
  }
}
