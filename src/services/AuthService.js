import axios from 'axios';

const http = axios.create({
  baseURL: "https://rising-sun-java-server-production.up.railway.app",
});

export default {

  login(user) {
    return http.post('/login', user)
  },

  register(user) {
    return http.post('/register', user)
  },

  changePassword(user) {
    return http.put('/change-password', user);
  },
  
  getRole(name) {
    return http.get(`/role/${name}`)
  }
}
