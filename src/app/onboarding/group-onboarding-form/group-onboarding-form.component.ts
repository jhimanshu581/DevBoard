import { Component, OnInit } from '@angular/core';
import { CookiesService } from '../../services/cookies.service';
import { GitlabService } from 'src/app/services/gitlab.service';
import { JenkinsService } from 'src/app/services/jenkins.service';
import { map, Observable } from 'rxjs';
import { ConsoleOutputComponent } from 'src/app/console-output/console-output.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-group-onboarding-form',
  templateUrl: './group-onboarding-form.component.html',
  styleUrls: ['./group-onboarding-form.component.scss']
})
export class GroupOnboardingFormComponent implements OnInit {

  constructor(private _cookies: CookiesService,private _gitlab: GitlabService, private _jenkins: JenkinsService, public _dialog: MatDialog) {
   }

  gitlabGroup: string;
  isRedis: boolean;
  isKafka: boolean;
  isMongodb: boolean;
  buildId: string = '';
  jobStatus: string = '';
  consoleData: string ='';
  dialogData : string ='ssd';
  myObservable = new Observable((observer) => {
    
    // let buildIdInterval = setInterval(() => {
    //   this.getJobId('27625167');
    //   if(this.buildId!=''){
    //     clearInterval(buildIdInterval);
    //     let consoleOutputInterval = setInterval(() => {
    //       this._jenkins.getConsoleOutput('GroupOnBoarding',this.buildId).subscribe(Data => {
    //         this.consoleData += Data;
    //       });
    //       if(this.jobStatus!=''){
    //         clearInterval(consoleOutputInterval);
    //       }
    //     },3000);

    //     let jobStatusInterval = setInterval(()=>{
    //       this.getJobResult(this.buildId);
    //       if(this.jobStatus!=''){
    //         clearInterval(jobStatusInterval);
    //       }
    //     },1000)

    //   }
    //   },1000);
    
    this._gitlab.createGitlabGroup(this.gitlabGroup).subscribe((firstCallData) => {
      observer.next("GitLab Group Created " +this.gitlabGroup)
      this._gitlab.addBotAsMemberToGroup(JSON.parse(JSON.stringify(firstCallData))['id']).subscribe(secondCallData => {
        observer.next("Added svc.bot.hcsops as member with owner priviliges in the group");
        this._jenkins.onBoardingGroup(JSON.parse(JSON.stringify(firstCallData))['path'], this.isRedis === undefined ? "false" : "true", this.isKafka === undefined ? "false" : "true", this.isMongodb === undefined ? "false" : "true").subscribe( response => {
          let queueID = response.headers?.get('Location'); 
          let qId = queueID?queueID.match(/(\d+)/):''; 
          let buildIdInterval = setInterval(() => {
            this.getJobId(qId?qId[0]:'');
            console.log(this.buildId);
            
            if(this.buildId!=''){
              clearInterval(buildIdInterval);
              let consoleOutputInterval = setInterval(() => {
                this._jenkins.getConsoleOutput('GroupOnBoarding',this.buildId).subscribe(Data => {
                  this.dialogData = this.consoleData + Data;
                });
                if(this.jobStatus!=''){
                  clearInterval(consoleOutputInterval);
                }
              },3000);
      
              let jobStatusInterval = setInterval(()=>{
                this.getJobResult(this.buildId);
                if(this.jobStatus!=''){
                  clearInterval(jobStatusInterval);
                }
              },1000)
      
            }
            },1000);
          // console.log(response.headers?.get('Location'));
          // console.log(response);
        });
      },
      (errorForSecondCall) => {
        observer.next("Member svc.bot.hcsops not addedd");            
      });
    },(errorForFirstCall) => {
      observer.next("Group not created either that name is taken or authorization issues");            
    });
  });
  
  ngOnInit(): void {
  }

  groupOnboard() : void{
    this.buildId= '';
    this.jobStatus = '';
    this.consoleData = '';
    this.dialogData = '';
    this.myObservable.subscribe((val) =>{
      this.consoleData += val;
      this.dialogData += val;
    })  
  }

  getJobId(queueID: string|null){
    this._jenkins.getJobIdandResult("GroupOnBoarding",queueID?queueID:'').subscribe(response => {
      let jsonResponse = JSON.parse(JSON.stringify(response))['builds'];      
      for(let obj of jsonResponse){        
        if(obj['queueId']+''==queueID){
          this.buildId = obj['id'];
          break;
        }
      }
      
    });
  }

  getJobResult(buildId: string){
    this._jenkins.getJobIdandResult("GroupOnBoarding",buildId).subscribe(response => {
      let jsonResponse = JSON.parse(JSON.stringify(response))['builds'];
      
      for(let obj of jsonResponse){
        if(obj['id']+''==buildId && obj['result']!=null&&obj['result'].length!=0){
          this.jobStatus = obj['result'];
          break;
        }
      }
    });
  }
}
