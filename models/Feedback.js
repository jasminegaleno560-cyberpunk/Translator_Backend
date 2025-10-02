const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema({
  username: { type: String, required: true },
  message: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5 }, // optional, if you want stars
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Feedback", FeedbackSchema);
