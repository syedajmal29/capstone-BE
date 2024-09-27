const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    required: true,
  },
  jobDescription: {
    type: String,
    required: true,
  },
  skills: {
    type: [String], // Assuming skills are stored as an array of strings
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
  jobTitleuser: {
    type: String,
    required: true,
  },
  coverLetter: {
    type: String,
    required: true,
  },
  resume: {
    type: String, // Store the filename or path of the uploaded resume
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  contactAddress: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  emailAddress: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); // Simple email validation
      },
      message: props => `${props.value} is not a valid email!`
    }
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  highestEducation: {
    type: String,
    required: true,
  },
  schoolsAttended: {
    type: String,
    required: true,
  },
  majorFieldOfStudy: {
    type: String,
    required: true,
  },
  skillsQualifications: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  achievements: {
    type: String,
    required: true,
  }
}, { timestamps: true }); // Add timestamps for createdAt and updatedAt

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;
