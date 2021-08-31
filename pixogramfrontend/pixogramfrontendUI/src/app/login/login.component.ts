import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  errorMsg ="Invalid Login";
  invalidLogin = false ;
  constructor(private router: Router, private authentication : HardcodedAuthenticationService) {
  }
  ngOnInit(): void {
  }
  handleLogin(){
  if(this.authentication.authenticate(this.username,this.password)){
    this.invalidLogin = false;
    this.router.navigate(['welcome',this.username]);
  }else{
    this.invalidLogin = true;
  }
  }

}
