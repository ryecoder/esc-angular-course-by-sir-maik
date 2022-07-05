import { Injectable } from '@angular/core';
import { SHA256 } from 'crypto-js';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  sessionAuthenticated = false;
  user:any=[
    {
      'username':'admin',
      'password': '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8'
    }
  ]

  constructor(
    private router: Router
  ) { }

  authenticate(username:string, password:string){
    // entry password
    var tempPassword = SHA256(password).toString()
    var dbPassword = this.getUserPassword(username)

    if(dbPassword != "NOTFOUND"){
      if (tempPassword == dbPassword){
        this.sessionAuthenticated = true
      } else {
        this.sessionAuthenticated = false
      }
    }

    localStorage.setItem('sessionAuthenticated', 'true')
  }

  getAuthenticationStatus(){
    return this.sessionAuthenticated
  }

  private getUserPassword(username:string): string{

    for(var key of Object.keys(this.user)){
      if(this.user[key].username == username){
        return this.user[key].password
      }
    }

    return "NOTFOUND"
  }

  logout(){
    localStorage.setItem('sessionAuthenticated', 'false')
    this.router.navigate(['/'])
  }
}
