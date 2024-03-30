var mongoose = require('mongoose');
var userschma = new mongoose.Schema({
    name: {
        type: String,
    }     
})
module.exports = mongoose.model('user-data',userschma)