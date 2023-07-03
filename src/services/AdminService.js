import axios from "axios";

const http = axios.create({
  baseURL: "https://phillips-jd.github.io/rising-sun-client",
});
  
  export default {
      getPendingApplications() {
          return http.get('/users/pending');
      },

      approveApplication(user, userId) {
          return http.put(`/users/approve/${userId}`, user);
      },

      declineApplication(user, userId) {
          return http.put(`/users/decline/${userId}`, user);
      },

      promoteToAdmin(user, userId) {
          return http.put(`/admin/promote/${userId}`, user);
      },
  }