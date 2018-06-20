import {IP_ADDRESS_SPRING} from "../constants";

export class WidgetServiceClient {

  IP_ADDRESS = IP_ADDRESS_SPRING

  findWidgetsForLesson(lessonId) {
    return fetch(this.IP_ADDRESS + '/api/lesson/' + lessonId + '/widget')
      .then(response => response.json());
  }
}
