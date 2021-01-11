const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ParkSchema = new Schema({
    id: Number,
    temp: Number,
    light: Number,
    sound: Number
})
module.exports = mongoose.model('park', ParkSchema)