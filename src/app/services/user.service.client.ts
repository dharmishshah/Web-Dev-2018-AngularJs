export class UserServiceClient {

   API_URL = 'http://localhost:4000';

  findUserById(userId) {
    return fetch(this.API_URL + '/api/user/' + userId)
      .then(response => response.json());
  }

  profile() {
    return fetch(this.API_URL + '/api/profile',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json());
  }

  updateProfile(updatedUser){
    const user = {
      username: updatedUser.username,
      firstName: updatedUser.firstName,
      lastName : updatedUser.lastName,
      email : updatedUser.emailId
    };
    return fetch(this.API_URL + '/api/profile', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  findUserByCredentials(username, password){
    const user = {
      username: username,
      password: password
    };
    return fetch(this.API_URL + '/api/user/findUserByCredentials', {
      body: JSON.stringify(user), // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  setSession(user){
    return fetch(this.API_URL + '/api/session/set/currentStudentId/' + user._id
    ).then(response => response.json()).then();
  }

  createUser(username, password) {
    const user = {
      username: username,
      password: password
    };
    return fetch(this.API_URL + '/api/user', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
