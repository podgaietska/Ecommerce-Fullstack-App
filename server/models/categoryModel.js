const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter category name"],
    },  
}, {timestamps: true});

module.exports = mongoose.model('Category', categorySchema);