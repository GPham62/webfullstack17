const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    author: String,
    comment: String
}, {
    _id: false,
})

const PostSchema = new Schema({
    picture: {type: String},
    description: {type: String},
    like: [String], //luu ten cua nguoi like
    title: {type: String},
    comments: [CommentSchema],
    views: {type: Number, default: 0 },
    author: String
}, {
    timestamps: true
});

module.exports = mongoose.model("post", PostSchema);