export class WidgetServiceClient {

  IP_ADDRESS = 'http://localhost:8080'

  findWidgetsForLesson(lessonId) {
    return fetch(this.IP_ADDRESS + '/api/lesson/' + lessonId + '/widget')
      .then(response => response.json());
  }
}
