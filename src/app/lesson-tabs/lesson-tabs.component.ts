import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LessonServiceClient} from "../services/lesson.service.client";

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

  constructor(private service: LessonServiceClient,
              private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }

  courseId;
  moduleId;
  topicId;
  lessonId;
  lessons = [];
  widgets = []

  setParams(params) {
    this.courseId = params['courseId'];
    this.moduleId = params['moduleId'];
    this.topicId = params['topicId'];
    this.lessonId = params['lessonId'];
    this.loadLessons(this.topicId);
  }

  loadLessons(topicId) {
    this.topicId = topicId;
    console.log(topicId);
    this.service.findLessonsForTopic(topicId)
      .then(lessons => {
        this.lessons = lessons.topic.lessons
      });
  }

  ngOnInit() {
  }

}
