export class SectionServiceClient {

  SECTION_URL = 'http://localhost:4000/api/course/COURSEID/section';
  API_URL = 'http://localhost:4000'

  //SECTION_URL = 'https://webdev-nodejs-2018.herokuapp.com/api/course/COURSEID/section';
  //API_URL = 'https://webdev-nodejs-2018.herokuapp.com'



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

  updateSection(sectionId, sectionName, sectionSeats) {
    const section = {sectionName, sectionSeats};
    return fetch(this.API_URL + '/api/section/' + sectionId, {
      method: 'put',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  deleteSection(sectionId){

    return fetch(this.API_URL + '/api/section/' + sectionId, {
      method: 'delete',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
