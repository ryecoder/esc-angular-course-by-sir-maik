import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string = ""
  password:string = ""
  loginMessage:string = ""
  isShowMessage:boolean = false

  constructor(
    private loginService:LoginService,
    private router:Router) { }

  ngOnInit(): void {

  }

  login(){
    this.loginService.authenticate(this.username, this.password)
    if(this.loginService.sessionAuthenticated){
      this.router.navigate(['/note'])
    } else {
      this.loginMessage = "Error Authenticating. Please try again."
      this.isShowMessage = true
    }
  }

  setShowMessage(message:string){
    this.isShowMessage = true
    this.loginMessage = message
  }


}
