const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    listing_id: {
        type: Number,  //mongoose.Schema.Types.ObjectId
        unique: true,
        required: true
    },
    artist: {
        type: String
    },
    title: {
        type: String
    },
    label: {
        type: String
    },
    styles: {
        type: String
    },
    format: {
        type: String,
        required: true
    },
    release_id: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image_url: {
        type: String
    },
    video_url: {
        type: String
    }
});

module.exports = mongoose.model('Product', productSchema);