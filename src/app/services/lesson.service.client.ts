import {IP_ADDRESS_SPRING} from "../constants";

export class LessonServiceClient {

  TOPIC_URL = IP_ADDRESS_SPRING + '/api/lesson'

  findLessonsForTopic(topicId) {
    return fetch(this.TOPIC_URL + '/findAllLessonsByTopicId?topicId=' + topicId)
      .then(response => response.json());
  }
}
