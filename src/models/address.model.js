const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true },
    country: { type: String, required: true },
    status: { type: Number, required: true, default: 1 },
  },
  { timestamps: true }
);

const Address = mongoose.model("Address", addressSchema);

module.exports = { Address };
