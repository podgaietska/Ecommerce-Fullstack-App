const mongoose = require('mongoose');

const orderItemSchema = mongoose.Schema({
    quantity: {
        type: Number,
        required: [true, "Please enter product quantity"],
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }
});

module.exports = mongoose.model('OrderItem', orderItemSchema);