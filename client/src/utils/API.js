import axios from "axios";

export default {
  // Gets all books
  postUser: function(query) {
    console.log("Posting", query)
    const url = "/api/users/" + query
    return axios.post(url);
  },
};
