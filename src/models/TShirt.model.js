const mongoose = require("mongoose");

const tshirtSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    original_price: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    size: { type: String, enum: ["S", "M", "L", "XL"], required: true },
    quantity: { type: Number, default: 0 },
    color: [],
    image: [
      {
        type: String,
        url: String,
      },
    ],
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
    status: { type: Number, required: true, default: 1 },
  },
  { timestamps: true }
);

const Tshirt = mongoose.model("Tshirt", tshirtSchema);

module.exports = { Tshirt };
