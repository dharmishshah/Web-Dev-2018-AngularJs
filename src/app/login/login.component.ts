import { Component, OnInit } from '@angular/core';
import {Route, Router} from "@angular/router";
import {UserServiceClient} from "../services/user.service.client";
import {s} from "@angular/core/src/render3";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username;
  password;
  isError = false;


  constructor(private router: Router,
              private service: UserServiceClient,
              private cookieService : CookieService){

    this.logout = this.logout
  }


  login(username, password) {
    console.log([username, password]);
    this.service
      .findUserByCredentials(username, password)
      .then((response) => {
        var res = response;
        if(res !== 'User not found'){
          this.cookieService.set('username',res.username);
          this.cookieService.set('role',res.role);
          this.service.setSession(res);
          this.router.navigate(['profile'])
        }else{
          this.isError = true;
        }

      });
  }

  logout() {
    this.service.logout()
    this.cookieService.delete('username')
    this.cookieService.delete('role')
  }

  ngOnInit() {
    this.logout();
  }

}
