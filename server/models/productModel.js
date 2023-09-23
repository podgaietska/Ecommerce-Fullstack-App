const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter product name"],
    },
    description: {
        type: String,
        required: [true, "Please enter product description"],
    },
    image: {
        type: String,
        default: "",
    },
    brand: {
        type: String,
        default: "",
    },
    price: {
        type: Number,
        required: [true, "Please enter product price"],
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: [true, "Please enter product category"],
    },
    countInStock: {
        type: Number,
        required: [true, "Please enter product count in stock"],
        min: 0,
    },
    isFeatured: {
        type: Boolean,
        default: false,
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    }
});

productSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

productSchema.set('toJSON', {
    virtuals: true,
});

module.exports = mongoose.model('Product', productSchema);