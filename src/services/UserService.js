import axios from 'axios';

const http = axios.create({
  baseURL: "https://rising-sun-java-server-production.up.railway.app",
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