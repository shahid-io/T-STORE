const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile: { type: String, unique: true },
    dob: { type: String },
    gender: { type: String },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    isBlocked: { type: Boolean, default: false },
    cart: { type: Array, default: [] },
    address: { type: String, required: false },
    whislist: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    status: { type: Number, required: true, default: 1 },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = { User };
