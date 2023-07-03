import axios from 'axios';

const http = axios.create({
  baseURL: "https://rising-sun-java-server-production.up.railway.app",
});

export default {

  getAdoptedPets() {
    return http.get('/celebrate');
  },

  getAvailablePets() {
    return http.get('/pets');
  },

  getAvailablePetsForUpdate() {
    return http.get('/update');
  },

  addPet(addPetDTO) {
    return http.post('/update', addPetDTO);
  },

  updatePet(updatePetDTO) {
    return http.put('/update', updatePetDTO);
  },

  getPetById(id) {
    return http.get(`/pets/id/${id}`);
  },

  getPetImages(id) {
    return http.get(`/pets/images/${id}`);
  }

}