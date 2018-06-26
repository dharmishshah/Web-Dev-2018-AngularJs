import {IP_ADDRESS_SPRING} from "../constants";

export class ModuleServiceClient {

  MODULE_URL = IP_ADDRESS_SPRING + '/api/module'
  findModulesForCourse(courseId) {
    return fetch(this.MODULE_URL + '/findAllModulesByCourseId?courseId=' + courseId)
      .then(response => response.json());
  }
}
