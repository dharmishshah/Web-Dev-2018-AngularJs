import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SectionServiceClient} from "../services/section.service.client";
import {NgbModal, ModalDismissReasons} from "@ng-bootstrap/ng-bootstrap"

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  constructor(private service: SectionServiceClient,
              private router: Router,
              private route: ActivatedRoute,
              private modalService: NgbModal) {
    this.route.params.subscribe(params => this.loadSections(params['courseId']))


  }

  sectionName = '';
  seats = '';
  courseId = '';
  sections = [];
  loadSections(courseId) {
    this.courseId = courseId;
    this
      .service
      .findSectionsForCourse(courseId)
      .then(sections => this.sections = sections);
  }
  updatedSectionName = "";
  updatedSeats ="";
  deleteSectionId = "";

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
    this.modalService.open(updateSection).result.then((result) => {

    });
  }


  deleteSectionModal(deleteSection) {
    this.deleteSectionId = deleteSection._id;
    this.modalService.open(deleteSection).result.then((result) => {

    });
  }


  ngOnInit() {

  }

}
