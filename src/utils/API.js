import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getRandomdog: function () {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  },
  getBooksofName: function (book) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=search+terms");
  },
  getBooksList: function () {
    return axios.get("https://dog.ceo/api/breeds/list");
  }
};



// import http from "../services/httpService";

// export default {
//   // Gets books from the Google API
//   getBooks: function(q) {
//     return http.get("/api/google", {
//       params: { q: "title:" + q }
//     });
//   },
//   // Gets all saved books
//   getSavedBooks: function() {
//     return http.get("/api//books");
//   },
//   // Deletes the saved book with the given id
//   deleteBook: function(id) {
//     return http.delete("/api//books/" + id);
//   },
//   // Saves an book to the database
//   saveBook: function(bookData) {
//     return http.post("/api//books", bookData);
//   }
// };