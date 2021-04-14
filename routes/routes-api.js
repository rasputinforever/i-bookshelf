const Router = require("express").Router();
const Books = require("../models/books.js");

Router.get("/api/users/:userid", async (req, res) => {
    console.log("GET request for books")
    Books.findOne({ _id: req.params.userid })
  .then((data) => {
    res.status(200).json(data)
  })
});

Router.post("/api/users/:user", async (req, res) => {
  console.log("POST request for userName: ", req.params.user)
  const newUser = {
    user: req.params.user,
    books: [],
  }
  Books.insertMany(newUser)
  .then(result => {
    res.status(200).json(result[0]._id);
    
  })
  
});

Router.put("/api/users/:userid", async (req, res) => {
  console.log("PUT request for userName: ", req.params.userid, " and ", req.body)
  Books.findOne({ _id: req.params.userid })
  .then((data) => {
    // now inject new book data
    const newBookList = [...data.books, req.body]

    Books.updateOne({ _id: req.params.userid }, {
      books: newBookList
    })
    .then(() => {
      // final
      res.status(200)
    });
  })
});

module.exports = Router;
