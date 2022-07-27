import { Component, OnInit } from '@angular/core';
import { JenkinsService } from 'src/app/services/jenkins.service';

@Component({
  selector: 'app-onboarding-form',
  templateUrl: './onboarding-form.component.html',
  styleUrls: ['./onboarding-form.component.scss']
})
export class OnboardingFormComponent implements OnInit {

  constructor(private _jenkins: JenkinsService) { }

  gitlabGroup: string;
  projectName: string;
  javaPackage: string;
  archType: string;
  buildId: string = '';
  jobStatus: string = '';
  consoleData: string ='';
  dialogData: string = '';
  ngOnInit(): void {
  }

  serviceOnboard(): void{
    if(this.archType === undefined){
      alert("Select an architecture type");
      return;
    }
    this._jenkins.onBoardingService(this.gitlabGroup,this.projectName,this.javaPackage, this.archType).subscribe(response => {
      let queueID = response.headers?.get('Location'); 
      let qId = queueID?queueID.match(/(\d+)/):''; 
      let buildIdInterval = setInterval(() => {
        this.getJobId(qId?qId[0]:'');
        console.log(this.buildId);
        
        if(this.buildId!=''){
          clearInterval(buildIdInterval);
          let consoleOutputInterval = setInterval(() => {
            this._jenkins.getConsoleOutput('ServiceOnBoarding',this.buildId).subscribe(Data => {
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
    })
  }
  getJobId(queueID: string|null){
    this._jenkins.getJobIdandResult("ServiceOnBoarding",queueID?queueID:'').subscribe(response => {
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
    this._jenkins.getJobIdandResult("ServiceOnBoarding",buildId).subscribe(response => {
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
