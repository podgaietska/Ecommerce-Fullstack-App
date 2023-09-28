const mongoose = require('mongoose');

const wishlistSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',  
        required: [true, "Please enter user"],
    },
    wishlistItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        default: [],
    }], 
}, {timestamps: true});

wishlistSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

wishlistSchema.set('toJSON', {
    virtuals: true,
});

module.exports = mongoose.model('Wishlist', wishlistSchema);