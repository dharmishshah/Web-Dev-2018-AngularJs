import {IP_ADDRESS_SPRING} from "../constants";

export class TopicServiceClient {
  //TOPIC_URL = 'http://localhost:8080/api/topic';
  TOPIC_URL = 'https://dharmish-shah-webdev-2018.herokuapp.com'
  MODULE_URL = IP_ADDRESS_SPRING

  findTopicsForModule(moduleId) {
    return fetch(this.TOPIC_URL + '/findAllTopicsByModuleId?moduleId=' + moduleId)
      .then(response => response.json());
  }
}
