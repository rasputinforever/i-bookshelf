import axios from "axios";

export default {
  // Gets all books
  postUser: function(query) {
    const url = "/api/users/" + query
    return axios.post(url);
  },
  googleBook: function(query) {
    console.log(`https://www.googleapis.com/books/v1/volumes?q=${query}/`)
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}/`)
  },
  addBook: function(user, query) {
    const url = "/api/users/" + user

    return axios({
      method: 'put',
      url: url,
      data: query,
    });
  },
  getAllBooks: function(query) {
    const url = "/api/users/" + query
    return axios.get(url);
  },
  deleteBook: function(user, query) {
    const url = "/api/users/" + user
    return axios({
      method: 'delete',
      url: url,
      data: {index: query},
    });
  },
};
