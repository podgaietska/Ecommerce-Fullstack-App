const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please enter user name"],
    },
    lastName:{
        type: String,
        required: [true, "Please enter user name"],
    },
    email: {
        type: String,
        required: [true, "Please enter user email"],
    },
    passwordHash: {
        type: String,
        required: [true, "Please enter user password"],
    },
    phone: {
        type: String,
        required: [true, "Please enter user phone"],
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    street: {
        type: String,
        default: "",
    },
    apartment: {
        type: String,
        default: "",
    },
    zip: {
        type: String,
        default: "",
    },
    city: {
        type: String,
        default: "",
    },
    country: {
        type: String,
        default: "",
    },
}, {timestamps:true});

userSchema.virtual('id').get(function() {
    return this._id.toHexString();
});

userSchema.set('toJSON', {
    virtuals: true,
});

module.exports = mongoose.model('User', userSchema);