// controllers/studentProfileController.js

const StudentProfile = require('../models/studentProfile');

// Get Student Profile
exports.getProfile = async (req, res) => {
  try {
    const profile = await StudentProfile.findOne({ email: req.user.email }); // Assuming user email is available in req.user
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.status(200).json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update Student Profile
exports.updateProfile = async (req, res) => {
  try {
    const updates = req.body; // Get fields to update from request body
    const profile = await StudentProfile.findOneAndUpdate(
      { email: req.user.email },
      updates,
      { new: true, runValidators: true }
    );
    
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    res.status(200).json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
