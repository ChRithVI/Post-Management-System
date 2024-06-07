const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    id: String,
    title: String,
    desc: String,
    date: String,
    path: String

});

const Post = mongoose.model('Post', postSchema);

module.exports =Post;
