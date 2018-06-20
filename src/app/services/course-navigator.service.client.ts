export class CourseNavigatorServiceClient {
  IP_ADDRESS = 'http://localhost:8080'

  findAllCourses() {
    return fetch(this.IP_ADDRESS + '/api/course')
      .then(response => response.json());
  }
  findAllModulesForCourses(courseId) {
    return fetch(this.IP_ADDRESS + '/api/course/' + courseId + '/module')
      .then(response => response.json());
  }
}
