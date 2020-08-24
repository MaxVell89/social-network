const {Schema, model} = require('mongoose')

const feedSchema = new Schema({
    author: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        required: true
    },
    likes: {
        type: Number,
        required: true
    }
});

module.exports = model('Feed', feedSchema);
