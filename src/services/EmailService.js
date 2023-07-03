import axios from 'axios';


const http = axios.create({
  baseURL: "https://phillips-jd.github.io/rising-sun-client",
});

export default {

    sendApprovedEmail(email) {
      return http.post('/messages/approved', email );
    },

    sendDeclinedEmail(email) {
        return http.post('/messages/declined', email);
    }

}