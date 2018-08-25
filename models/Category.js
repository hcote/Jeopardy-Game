var mongoose = require("mongoose"),
  Schema = mongoose.Schema
  // passportLocalMongoose = require("passport-local-mongoose");


var CategorySchema = new Schema({
  _id: String,
  title: String,
  clues: [{
    answer: String,
    question: String,
    value: Number
  }]
});

// CategorySchema.plugin(passportLocalMongoose, {usernameUnique: false});

var Category = mongoose.model("Category", CategorySchema);
module.exports = Category;
