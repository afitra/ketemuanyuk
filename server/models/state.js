var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const mongodb = require('mongodb')
var stateSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
    tag: {
        type: [],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    }
});
let State = mongoose.model('States', stateSchema)


module.exports = State