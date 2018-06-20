import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserServiceClient} from "../services/user.service.client";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
              private service: UserServiceClient,
              private cookieService : CookieService) { }

  username;
  password;
  password2;
  isUsernameError =false;
  isPasswordError = false;
  register(username, password, password2) {
    console.log([username, password, password2]);

    if(password !== password2){
      this.isPasswordError = true
      return
    }

    this.service.findUserByUsername(username).then((response) => {
      if("true" === response){
        this.isUsernameError = true
        return
      }else{
        this.service
          .createUser(username, password)
          .then((response) => {
            var res = response;
            this.cookieService.set('username',res.username);
            this.cookieService.set('role',res.role);
            this.router.navigate(['profile']);
          });
      }
    })



  }

  ngOnInit() {
  }

}
