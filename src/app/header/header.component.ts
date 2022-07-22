import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CookiesService } from '../services/cookies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router, private _cookies: CookiesService) {
    router.events.subscribe(event => {
      if(router.url === '/login') {
        this.showSideNav = false;
      }
      else{
        this.showSideNav = true;
      }
    })
  }
  showSideNav ?: boolean;
  

  userName: string;

  ngOnInit(): void {
    this.userName = this._cookies.getCookie("JenkinId");
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
}
