const Router = require("express").Router();
const Books = require("../models/books.js");

Router.get("/api/books", async (req, res) => {
    console.log("GET request for books")

});

Router.post("/api/users/:user", async (req, res) => {
  console.log("POST request for userName: ", req.params.user)
  const newUser = {
    user: req.params.user,
    books: [],
  }
  Books.insertMany(newUser)
  .then(result => {
    res.json(result[0]._id);
    
  })
  
});

Router.put("/api/users/:userid/:bookid", async (req, res) => {
  console.log("PUT request for userName: ", req.params.userid, " and ", req.params.bookid)
  


});

module.exports = Router;
