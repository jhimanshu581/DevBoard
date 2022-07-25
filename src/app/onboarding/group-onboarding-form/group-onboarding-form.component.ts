import { Component, OnInit } from '@angular/core';
import { CookiesService } from '../../services/cookies.service';
import { GitlabService } from 'src/app/services/gitlab.service';
import { JenkinsService } from 'src/app/services/jenkins.service';

@Component({
  selector: 'app-group-onboarding-form',
  templateUrl: './group-onboarding-form.component.html',
  styleUrls: ['./group-onboarding-form.component.scss']
})
export class GroupOnboardingFormComponent implements OnInit {

  constructor(private _cookies: CookiesService,private _gitlab: GitlabService, private _jenkins: JenkinsService) {
   }

  gitlabGroup: string;
  isRedis: boolean;
  isKafka: boolean;
  isMongodb: boolean;

  ngOnInit(): void {
  }

  groupOnboard() : void{

    this._gitlab.createGitlabGroup(this.gitlabGroup).subscribe(firstCallData => {
      console.log(firstCallData);
      this._gitlab.addBotAsMemberToGroup(JSON.parse(JSON.stringify(firstCallData))['id']).subscribe(secondCallData => {
        console.log(secondCallData);
        this._jenkins.onBoardingGroup(JSON.parse(JSON.stringify(firstCallData))['path'], this.isRedis === undefined ? "false" : "true", this.isKafka === undefined ? "false" : "true", this.isMongodb === undefined ? "false" : "true").subscribe( thirdCallData => {
          console.log(thirdCallData);
        })
      });
    });
    console.log(this.gitlabGroup);
    console.log(this.isRedis === undefined ? "false" : "true");
    console.log(this.isKafka);
    console.log(this.isMongodb);


  }

}
