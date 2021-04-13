import axios from "axios";

import API_KEY from "./config.js"

export default {
  // Gets all books
  postUser: function(query) {
    console.log("Posting", query)
    const url = "/api/users/" + query
    return axios.post(url);
  },
  googleBook: function(query) {
    console.log("put google API stuff here for ", query)
    console.log(API_KEY.API_KEY)
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=1984&key=${API_KEY.API_KEY}`)
  }
};
