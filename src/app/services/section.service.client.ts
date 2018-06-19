export class SectionServiceClient {

  SECTION_URL = 'http://localhost:4000/api/course/COURSEID/section';
  API_URL = 'http://localhost:4000'

  findSectionsForStudent() {
    const url = this.API_URL + '/api/student/section';
    return fetch(url, {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  enrollStudentInSection(sectionId) {
    const url = this.API_URL + '/api/section/' + sectionId + '/enrollment';
    return fetch(url, {
      method: 'post',
      credentials: 'include'
    });
  }

  unEnrollStudentInSection(sectionId, enrollmentId) {
    const url = this.API_URL + '/api/section/' + sectionId + '/unenrollment/' + enrollmentId;
    return fetch(url, {
      credentials: 'include'
    });
  }

  findSectionsForCourse(courseId) {
    return fetch(this.SECTION_URL.replace('COURSEID', courseId))
      .then(response => response.json());
  }

  createSection(courseId, name, seats) {
    const section = {courseId, name, seats};
    return fetch(this.SECTION_URL.replace('COURSEID', courseId), {
      method: 'post',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
