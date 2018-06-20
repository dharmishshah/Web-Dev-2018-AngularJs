import { Component, OnInit } from '@angular/core';
import {User} from "../models/user.model.client";
import {UserServiceClient} from "../services/user.service.client";
import {Router} from "@angular/router";
import {Course} from "../models/coruse.model.client";
import {SectionServiceClient} from "../services/section.service.client";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private router: Router,
              private sectionService:SectionServiceClient,
              private cookieService : CookieService ) { }

  user: User = new User();
  sections = [];
  courses = [];
  userName = this.cookieService.get('username');
  userRole = this.cookieService.get('role');

  update(user: User) {
    this
      .service
      .updateProfile(user)
      .then(() => {
        this.service
          .profile()
          .then(user => this.user = user);
      });
  }


  unEnroll(section) {
    // alert(section._id);
    this.sectionService
      .unEnrollStudentInSection(section.section._id, section._id)
      .then(() => {
        this.loadProfile()
      });
  }

  loadProfile(){
    this.service
      .profile()
      .then(user => this.user = user);

    this.sectionService.findSectionsForStudent()
      .then(sections => {
        this.courses = JSON.parse(localStorage.getItem("courses"));
        this.sections = sections
      });
  }

  ngOnInit() {
    this.loadProfile()

  }



}
