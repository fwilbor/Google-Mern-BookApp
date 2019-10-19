import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getRandonDog: function () {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  },
  getBooksofName: function (book) {
    return axios.get("https://dog.ceo/api/breed/" + book + "/images");
  },
  getBooksList: function () {
    return axios.get("https://dog.ceo/api/breeds/list");
  }
};
