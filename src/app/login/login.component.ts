import { Component, OnInit } from '@angular/core';
import {Route, Router} from "@angular/router";
import {UserServiceClient} from "../services/user.service.client";
import {s} from "@angular/core/src/render3";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username;
  password;
  error: string = "no error";


  constructor(private router: Router,
              private service: UserServiceClient) { }


  login(username, password) {
    console.log([username, password]);
    this.service
      .findUserByCredentials(username, password)
      .then((response) => {
        var res = response;
        if(res !== 'User not found'){
          this.service.setSession(res);
          this.router.navigate(['profile'])
        }else{
          this.error = 'Invalid Credentials';
        }

      });
  }

  ngOnInit() {
  }

}
