const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    status: { type: Number, required: true, default: 1 },
});

const Category = mongoose.model('Category', categorySchema);

module.exports = { Category };
