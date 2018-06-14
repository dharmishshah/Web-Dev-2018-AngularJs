export class TopicServiceClient {
  TOPIC_URL = 'http://localhost:8080/api/topic';
  findTopicsForModule(moduleId) {
    return fetch(this.TOPIC_URL + '/findAllTopicsByModuleId?moduleId=' + moduleId)
      .then(response => response.json());
  }
}
