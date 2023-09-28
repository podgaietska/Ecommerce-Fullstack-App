const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',  
        required: [true, "Please enter user"],
    },
    cartItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        default: [],
    }], 
    totalPrice: {
        type: Number,
        defaul: 0,
    },

}, {timestamps: true});

cartSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

cartSchema.set('toJSON', {
    virtuals: true,
});

module.exports = mongoose.model('Cart', cartSchema);