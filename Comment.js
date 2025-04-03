const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    content: { type: String, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    recipeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' },
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
