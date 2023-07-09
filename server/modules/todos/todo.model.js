const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    title: {type:String, required: true},
    status: String,
});

module.exports = mongoose.model("Todo", todoSchema);