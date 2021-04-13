const Router = require("express").Router();
const Books = require("../models/books.js");

Router.get("/api/books", async (req, res) => {
    console.log("GET request for books")

});

Router.post("/api/book/:name", async (req, res) => {
  console.log("POST request for book name: ", req.params.category)


});

module.exports = Router;
