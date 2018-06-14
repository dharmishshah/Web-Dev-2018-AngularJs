export class CourseServiceClient {
  COURSE_URL = 'http://localhost:8080/api/course';
  findAllCourses() {
    return fetch(this.COURSE_URL + '/findAllCourses')
      .then(response => response.json());
  }
  findCourseById(courseId) {
    return fetch(this.COURSE_URL + '/findAllCourses?courseId=' + courseId)
      .then(response => response.json());
  }
}
