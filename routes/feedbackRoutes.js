const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");

// POST: Submit feedback
router.post("/", async (req, res) => {
  try {
    const {
  overallExperience,
  featureUsed,
  translationAccuracy,
  technicalIssues,
  futureFeatures,
  additionalComments
} = req.body;


    if (!overallExperience || !featureUsed) {
      return res.status(400).json({ error: "overallExperience and featureUsed are required" });
    }

    const newFeedback = new Feedback({
      overallExperience,
      featureUsed,
      translationAccuracy,
      technicalIssues,
      futureFeatures,
      additionalComments
    });

    await newFeedback.save();
    res.json({ success: true, feedback: newFeedback });
  } catch (err) {
    console.error("❌ Error saving feedback:", err);
    res.status(500).json({ error: err.message });
  }
});

// GET: Retrieve all feedback
router.get("/", async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.json(feedbacks);
  } catch (err) {
    console.error("❌ Error getting feedback:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
