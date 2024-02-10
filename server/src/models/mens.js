const mongoose = require('mongoose');

const mensSchema = new mongoose.Schema({
    name: String,
    age: String,
    gender: String,
    dob: String,
    country: String,
    mobile: String,
})

const MensRanking = new mongoose.model('MensRanking', mensSchema)

module.exports = MensRanking