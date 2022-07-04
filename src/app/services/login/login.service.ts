import { Injectable } from '@angular/core';
import { SHA256 } from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user:any=[
    {
      'username':'admin',
      'password': '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8'
    }
  ]

  constructor() { }

  authenticate(username:string, password:string){
    // entry password
    var temp_password = SHA256(password).toString()
    var userAccount = this.user.filter()
  }

  private getUserPassword(username:string){
    this.user.filter(())
  }
}
