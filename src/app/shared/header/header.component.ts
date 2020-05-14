import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import {moveIn, fallIn} from '../router.animation';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [moveIn(), fallIn()]
})
export class HeaderComponent implements OnInit {

  @Input() pageTitle: string;
  @Input() iconTitle: string;
  @Input() helpTitle: string;
  configData;
  counter = 0;
  userStatusColor = "warn";

  user: firebase.User;

  constructor(private auth: AuthService, 
    private router: Router) { }


    ngOnInit() {
      this.auth.getUserState()
        .subscribe( user => {
          this.user = user;
        })
    }
  
    login() {
      this.router.navigate(['/login']);
    }
  
    logout() {
      this.auth.logout();
    }
  
    register() {
      this.router.navigate(['/register']);
    }
  }





  