import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SectionServiceClient} from "../services/section.service.client";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap"

import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  constructor(private service: SectionServiceClient,
              private router: Router,
              private route: ActivatedRoute,
              private modalService: NgbModal,
              private cookieService: CookieService) {
    this.route.params.subscribe(params => this.loadSections(params['courseId']))
    this.userRole = this.cookieService.get('role');
    this.userName = this.cookieService.get('username');


  }
  counter = 1;
  courseId = '';
  sections = [];
  courseName = '';
  sectionName = '';
  seats = '50';
  userRole = '';
  userName = '';
  updatedSectionName = "";
  updatedSeats ="";
  deleteSectionId = "";
  updatedSectionId = "";

  loadSections(courseId) {
    this.courseId = courseId;
    this
      .service
      .findSectionsForCourse(courseId)
      .then(sections => this.sections = sections);

    var courses = [];
    courses = JSON.parse(localStorage.getItem("courses"));
    courses.map((course) => {
      if(course.id == this.courseId){
        this.courseName = course.title
        this.sectionName = this.courseName  + ' Default Section '
      }

    })
  }

  createSection(sectionName, seats) {
    this
      .service
      .createSection(this.courseId, sectionName, seats)
      .then(() => {
        this.loadSections(this.courseId);
      });
  }

  enroll(section) {
    // alert(section._id);
    this.service
      .enrollStudentInSection(section._id)
      .then(() => {
        this.router.navigate(['profile']);
      });
  }

  updateSectionModal(updateSection, section) {
    this.updatedSectionName = section.name;
    this.updatedSeats = section.seats;
    this.updatedSectionId = section._id;
    this.modalService.open(updateSection).result.then((result) => {
      if(result == 'updateSection'){
        this.updateSection();
      }

    });
  }


  deleteSectionModal(deleteSection, section) {
    this.deleteSectionId = section._id;
    this.modalService.open(deleteSection).result.then((result) => {
      if(result == 'deleteSection'){
        this.deleteSection();
      }
    });
  }

  updateSection(){
    var sectionId = this.updatedSectionId;
    var sectionName = this.updatedSectionName;
    var sectionSeats = this.updatedSeats

    this.service.updateSection(sectionId, sectionName, sectionSeats).then( (result) => {
      this.loadSections(this.courseId);
    })


  }

  deleteSection(){

    var sectionId = this.deleteSectionId;
    this.service.deleteSection(sectionId).then( (result) => {
      this.loadSections(this.courseId);
    })

  }


  ngOnInit() {

  }

}
