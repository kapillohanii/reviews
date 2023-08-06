const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
  branch: { type: String, required: true },
  course: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: String, required: true }
}, {
  timestamps: true,
});



const Post = mongoose.model('Post', postSchema);

module.exports = Post;