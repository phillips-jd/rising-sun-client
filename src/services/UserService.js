import axios from 'axios';

const http = axios.create({
  baseURL: "https://phillips-jd.github.io/rising-sun-client",
});

export default {

  getUsers() {
    return http.get('/users');
  },

  get(id) {
    return http.get(`/users/id/${id}`)
  },

  getUserByName(username) {
    return http.get(`/users/username/${username}`)
  }
}