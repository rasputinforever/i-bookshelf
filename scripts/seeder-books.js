var mongoose = require("mongoose");
var db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ibookshelf", {
  useNewUrlParser: true,
});

var booksSeed = [
  {

  },
];

db.books.deleteMany({})
  .then(
    db.Challenge.collection.insertMany(challengeSeed).then((data) => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
  )
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
