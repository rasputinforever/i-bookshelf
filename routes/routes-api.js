const Router = require("express").Router();
const Books = require("../models/books.js");

Router.get("/api/books", async (req, res) => {
    console.log("GET request for books")

});

Router.post("/api/users/:user", async (req, res) => {
  console.log("POST request for userName: ", req.params.user)

  res.json("Nice Work!")

});

module.exports = Router;
