const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");

// POST: Submit feedback
router.post("/", async (req, res) => {
  try {
    const { username, message, rating } = req.body;

    // quick check for required fields
    if (!username || !message) {
      return res.status(400).json({ error: "username and message are required" });
    }

    const newFeedback = new Feedback({ username, message, rating });
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
