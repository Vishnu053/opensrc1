var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  logoSrc: String,
  title: String,
  description: String
});

var Post = mongoose.model("Post", PostSchema);
module.exports = Post;
