import axios from "axios";

const http = axios.create({
  baseURL: "https://rising-sun-java-server-production.up.railway.app",
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