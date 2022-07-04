import { Injectable } from '@angular/core';
import { SHA256 } from 'crypto-js';

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

  constructor() { }

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

    console.log(this.sessionAuthenticated)
  }

  getAuthenticationStatus(){
    return this.sessionAuthenticated
  }

  private getUserPassword(username:string): string{

    for(var key of Object.keys(this.user)){
      if(this.user[key].username == username){
        // console.log(this.user[key].username + " : " + username + " = " + this.user[key].password)
        return this.user[key].password
      }
    }

    return "NOTFOUND"
  }
}
