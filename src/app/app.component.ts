import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from './service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser;
  title = 'app works!';

  constructor(private authService:AuthenticationService,
              private router: Router){}

  logout(){
    this.authService.logout();
    this.router.navigate(['login']);
  }
  isLoggedIn(){
    this.currentUser = localStorage.getItem('currentUser');
    return this.currentUser? true:false;
  }
}
