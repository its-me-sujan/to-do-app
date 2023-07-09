const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types;

const subTaskSchema = mongoose.Schema({
    title: {type: String, required: true},
    status: {type: String, enums: ['pending', 'complete'], default: 'pending'},
});

module.exports = mongoose.model('Subtask', subTaskSchema);