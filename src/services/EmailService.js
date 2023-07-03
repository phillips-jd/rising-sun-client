import axios from 'axios';


const http = axios.create({
  baseURL: "https://rising-sun-java-server-production.up.railway.app",
});

export default {

    sendApprovedEmail(email) {
      return http.post('/messages/approved', email );
    },

    sendDeclinedEmail(email) {
        return http.post('/messages/declined', email);
    }

}