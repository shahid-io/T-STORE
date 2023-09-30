const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
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
    totalPrice: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    status: { type: Number, required: true, default: 1 },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = { Order };
