const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema({
  overallExperience: { type: String, required: true },
  featureUsed: { type: String, required: true }, // renamed from languageUsedMost

  translationAccuracy: {
    samaToEnglish: { type: String },
    englishToSama: { type: String },
    samaToTagalog: { type: String }
  },

  technicalIssues: { type: String },
  futureFeatures: { type: String },
  additionalComments: { type: String },

  createdAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model("Feedback", FeedbackSchema);
