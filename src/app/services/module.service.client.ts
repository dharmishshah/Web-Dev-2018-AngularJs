export class ModuleServiceClient {
  MODULE_URL = 'http://localhost:8080/api/module';
  findModulesForCourse(courseId) {
    return fetch(this.MODULE_URL + '/findAllModulesByCourseId?courseId=' + courseId)
      .then(response => response.json());
  }
}
