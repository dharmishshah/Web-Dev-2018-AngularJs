import {IP_ADDRESS_SPRING} from "../constants";

export class CourseNavigatorServiceClient {

  IP_ADDRESS = IP_ADDRESS_SPRING
  findAllCourses() {
    return fetch(this.IP_ADDRESS + '/api/course')
      .then(response => response.json());
  }
  findAllModulesForCourses(courseId) {
    return fetch(this.IP_ADDRESS + '/api/course/' + courseId + '/module')
      .then(response => response.json());
  }
}
