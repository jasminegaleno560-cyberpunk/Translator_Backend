const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema({
  language: { type: String, required: true }, // ENGLISH, TAGALOG, SAMA_BAJAU

  overallExperience: { type: String, required: true },
  languageUsedMost: { type: String, required: true },

  translationAccuracySamaToEnglish: { type: Number, min: 1, max: 5 },
  translationAccuracyEnglishToSama: { type: Number, min: 1, max: 5 },
  translationAccuracySamaToTagalog: { type: Number, min: 1, max: 5 },

  technicalIssues: { type: String },
  futureFeatures: { type: String },
  additionalComments: { type: String },

  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Feedback", FeedbackSchema);
