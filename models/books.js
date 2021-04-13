const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const booksSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: "Username is Required",
  },
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  },
  fire_id: {
    type: String,
    unique: true,
  },
  userCreated: {
    type: Date,
    default: Date.now,
  },
  savedBooks: {
    type: Array,
  }
});
const Books = mongoose.model("Books", booksSchema);

module.exports = Books;
