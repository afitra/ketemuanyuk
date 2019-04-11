var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const mongodb = require('mongodb')
var orderSchema = new Schema({
    payment: {
        type: Number,
        required: true
    },
    tapping: {
        type: Number,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    stateId: {
        type: Schema.Types.ObjectId,
        ref: 'States',
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    }
});

let Order = mongoose.model('Orders', orderSchema)


module.exports = Order