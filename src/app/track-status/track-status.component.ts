import { Component, OnInit } from '@angular/core';
import { Timestamp } from 'rxjs';
import { JenkinsService } from '../services/jenkins.service';
import {} from '@angular/cdk/scrolling'
import { ConsoleOutputComponent } from '../console-output/console-output.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-track-status',
  templateUrl: './track-status.component.html',
  styleUrls: ['./track-status.component.scss']
})

export class TrackStatusComponent implements OnInit {

  constructor(private _jenkins: JenkinsService, public _dialog: MatDialog) { }

  selectedValue: string;
  buildData: allBuilds;
  ngOnInit(): void {
  }

  jobChange(data: any){
    this.selectedValue = data.value;
    this._jenkins.getAllBuilds(this.selectedValue).subscribe(data => {
     this.buildData =  JSON.parse(JSON.stringify(data));      
    });
  }

  getDateFromTimeStamp(timestamp: string){    
    return new Date(timestamp).toLocaleString();
  }

  getConsoleOutput(id: string){
    this._jenkins.getConsoleOutput(this.selectedValue,id).subscribe(data =>{
      console.log(data);
      
        let dialogRef = this._dialog.open(ConsoleOutputComponent, {
          maxWidth: '80vw',
          maxHeight: '80vh',
          width: '80%',
          height: '80%',
          data: data
        });
      });
  }
}

interface build{
  id: string,
  result: string,
  url: string,
  timestamp: string
}

interface allBuilds{
  builds: build[]
}