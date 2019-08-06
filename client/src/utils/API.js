import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("http://localhost:3002/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/clients/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/clients/" + id);
  },
  // Saves a book to the database
  saveBook: function(clientData) {
    return axios.post("/api/clients", clientData);
  }
};
