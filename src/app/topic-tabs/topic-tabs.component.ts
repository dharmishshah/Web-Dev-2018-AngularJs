import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {TopicServiceClient} from "../services/topic.service.client";

@Component({
  selector: 'app-topic-tabs',
  templateUrl: './topic-tabs.component.html',
  styleUrls: ['./topic-tabs.component.css']
})
export class TopicTabsComponent implements OnInit {

  constructor(private service: TopicServiceClient,
              private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }


  courseId;
  moduleId;
  topicId;
  topics = [];

  setParams(params) {
    this.courseId = params['courseId'];
    this.moduleId = params['moduleId'];
    this.topicId = params['topicId'];
    this.loadTopics(this.moduleId);
  }

  loadTopics(moduleId) {
    this.moduleId = moduleId;
    console.log(moduleId);
    this.service.findTopicsForModule(moduleId)
      .then(topics => this.topics = topics.module.topics);
  }

  ngOnInit() {
  }

}


