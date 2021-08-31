import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {
  constructor() { }
  authenticate(user:any,pass:any){
    if(user ==="sarbajit" && pass === "Passw0rd"){
        sessionStorage.setItem('authenticaterUser', user);
        return true ;
      }else{
        return false;
      }
  }
  isUserLoggedIn() {
      let user = sessionStorage.getItem('authenticaterUser')
      return !(user === null)
  }
  logout(){
      sessionStorage.removeItem('authenticaterUser')
  }
}
