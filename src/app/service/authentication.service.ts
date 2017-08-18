import {Injectable} from '@angular/core';

@Injectable()
export class AuthenticationService{
    //loggedIn : boolean;
    login(username, password){
        
            return new Promise((resolve,reject)=>{
                if(username === 'rajesh' && password === 'rajesh'){
                    localStorage.setItem('currentUser',username);
                    resolve('user');
                }
                else if(username === 'admin' && password === 'admin'){
                    localStorage.setItem('currentUser',username);
                    resolve('admin');
                }
                else{
                    reject();
                }
            })
        }
    logout(){
        localStorage.removeItem('currentUser');
    }
    getLoggedInUsername(){
        return localStorage.getItem('currentUser');
    }
}
