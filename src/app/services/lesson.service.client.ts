export class LessonServiceClient {
  TOPIC_URL = 'http://localhost:8080/api/lesson';
  findLessonsForTopic(topicId) {
    return fetch(this.TOPIC_URL + '/findAllLessonsByTopicId?topicId=' + topicId)
      .then(response => response.json());
  }
}
