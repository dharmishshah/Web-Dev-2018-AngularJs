import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from "../services/course.service.client";
import {Course} from "../models/coruse.model.client";
import {CookieService} from "ngx-cookie-service";
import {SectionServiceClient} from "../services/section.service.client";

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {

  constructor(private service: CourseServiceClient,
              private cookieService : CookieService,
              private sectionService :SectionServiceClient) {

    this.findAllCourses()

  }

  courses: Course[] = [];
  sections =[]
  enrolledCourses = [];


  ngOnInit() {

    this.findSectionsForStudent()
  }

  findAllCourses(){
    this.service.findAllCourses()
      .then(courses => {

        this.courses = courses.courses
        localStorage.setItem('courses', JSON.stringify(this.courses));
      });
  }

  findSectionsForStudent(){
    this.sectionService.findSectionsForStudent()
      .then(sections => {
        this.courses = JSON.parse(localStorage.getItem("courses"));
        this.sections = sections
        this.sections.map((section) => {
          this.enrolledCourses.push(section.section.courseId)
        })

      })
  }


  unEnroll(section) {
    // alert(section._id);
    this.sectionService
      .unEnrollStudentInSection(section.section._id, section._id)
      .then(() => {
        this.findSectionsForStudent()
      });
  }

}
