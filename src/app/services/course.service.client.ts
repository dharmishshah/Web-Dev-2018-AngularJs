import {IP_ADDRESS_SPRING} from '../constants';

export class CourseServiceClient {
  COURSE_URL = IP_ADDRESS_SPRING + '/api/course'
  findAllCourses() {
    return fetch(this.COURSE_URL + '/findAllCourses')
      .then(response => response.json());
  }
  findCourseById(courseId) {
    return fetch(this.COURSE_URL + '/findAllCourses?courseId=' + courseId)
      .then(response => response.json());
  }
}
