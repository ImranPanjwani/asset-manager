import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {AuthenticationService} from '../service/authentication.service';
import {AppComponent} from '../app.component';

@Component({
    templateUrl: 'login.component.html'
})

export class LoginComponent  {
    model: any = {};
    returnUrl: string;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private appComponent : AppComponent
        ) { }

   

    login() {
        this.authenticationService.login(this.model.username, this.model.password)
            .then((actor)=>{
                if(actor === 'admin'){
                    this.router.navigate(['adminhome']);
                }
                else{
                    this.router.navigate(['employeehome']);
                }
                

            })
            .catch(()=>{
                this.router.navigate(['login']);
            })
                
    }
}
