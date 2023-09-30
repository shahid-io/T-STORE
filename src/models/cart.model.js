const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [
      {
        tshirt: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Tshirt",
          required: true,
        },
        quantity: { type: Number, required: true },
      },
    ],
    status: { type: Number, required: true, default: 1 },
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", cartSchema);

module.exports = { Cart };
