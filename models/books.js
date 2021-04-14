const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookInfoSchema = new Schema({
  bookid: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  author: { type: Array, required: true },
})

const booksSchema = new Schema({
  user: { type: String, required: true },
  books: [bookInfoSchema],

});
const Books = mongoose.model("Books", booksSchema);

module.exports = Books;
