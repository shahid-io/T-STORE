const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    tshirt: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tshirt",
      required: true,
    },
    rating: { type: Number, required: true },
    comment: { type: String },
    createdAt: { type: Date, default: Date.now },
    status: { type: Number, required: true, default: 1 },
  },
  { timestamps: true }
);

const Review = mongoose.model("Review", reviewSchema);

module.exports = { Review };
