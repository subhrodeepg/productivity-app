const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    text: String,
    time: Number, 
    date: String 

});

module.exports = mongoose.model('Todo', todoSchema)