const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    orderItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'OrderItem',
        required: [true, "Please enter product category"],
    }],
    shippingAddress1: {
        type: String,
        required: [true, "Please enter shipping adress"],
    },
    shippingAddress2: {
        type: String,
        default: "",
    },
    city: {
        type: String,
        required: [true, "Please enter city"],
    },
    zip: {
        type: String,
        required: [true, "Please enter zip"],
    },
    country: {
        type: String,
        required: [true, "Please enter country"],
    }, 
    phone: {
        type: String,
        required: [true, "Please enter phone"],
    },
    status: {
        type: String,
        required: [true, "Please enter status"],
        default: "Pending",
    }, 
    totalPrice: {
        type: Number,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',  
    },
    dateOrdered: {
        type: Date,
        default: Date.now,
    },
}, {timestamps: true});

orderSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

orderSchema.set('toJSON', {
    virtuals: true,
});

module.exports = mongoose.model('Order', orderSchema);

/**
 * Order Example:
 * 
 * {
 *     "orderItems": [
 *        {
 *           "quantity": 3,
 *          "product": "64a33727a972578a4e1663f9"
 *      },
 *     {
 *         "quantity": 2,
 *        "product": "64a34694b1c838a11d43cae6"
 *   }
 * ],
 * "shippingAdress1": "Florin 1",
 * "shippingAdress2": "Florin 2",
 * "city": "Bucharest",
 * "zip": "123456",
 * "country": "Romania",
 * "phone": "123456789",
 * "status": "Pending",
 * "totalPrice": 100,
 * "user": "64a3650fe22bf1dae665f102",
 *  }
 */