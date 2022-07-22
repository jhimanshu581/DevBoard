import { Component, OnInit } from '@angular/core';
import { JenkinsService } from '../services/jenkins.service';

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

  ngOnInit(): void {
  }

  serviceOnboard(): void{
    if(this.archType === undefined){
      alert("Select an architecture type");
      return;
    }
    this._jenkins.onBoardingService(this.gitlabGroup,this.projectName,this.javaPackage, this.archType).subscribe(data => {
      console.log(data);
    })
  }
}
