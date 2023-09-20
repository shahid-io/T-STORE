const mongoose = require('mongoose');

const tshirtSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    size: { type: String, enum: ['S', 'M', 'L', 'XL'], required: true },
    color: { type: String, required: true },
    image: { type: String, required: true },
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
});

const Tshirt = mongoose.model('Tshirt', tshirtSchema);

module.exports = { Tshirt };
