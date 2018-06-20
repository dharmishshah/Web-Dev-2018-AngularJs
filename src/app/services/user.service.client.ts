import {IP_ADDRESS_NODE} from "../constants";

export class UserServiceClient {
  API_URL = IP_ADDRESS_NODE


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
      email : updatedUser.email,
      address : updatedUser.address,
      phoneNumber : updatedUser.phoneNumber
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
      body: JSON.stringify(user),
      credentials: 'include',// include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  findUserByUsername(username){

    return fetch(this.API_URL + '/api/user/findUserByUsername/' + username, {
      credentials: 'include',// include, same-origin, *omit
      method: 'get',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  setSession(user){
    return fetch(this.API_URL + '/api/session/set/currentStudentId/' + user._id
    ).then(response => response.json())
  }

  logout(){
    return fetch(this.API_URL + '/api/session/logout').then(response => response.json())
  }

  createUser(username, password) {
    const user = {
      username: username,
      password: password,
      role :'STUDENT'
    };
    return fetch(this.API_URL + '/api/user', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }
}
