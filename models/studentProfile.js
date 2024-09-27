// models/studentProfile.js

const mongoose = require('mongoose');

const studentProfileSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  percentage10th: {
    type: Number,
    required: true,
  },
  percentage12th: {
    type: Number,
    required: true,
  },
  collegeGPA: {
    type: Number,
    required: true,
  },
  resume: {
    type: String, // URL or path to the resume file
    default: null,
  },
  academicRecords: {
    type: String, // URL or path to the academic records file
    default: null,
  },
}, { timestamps: true });

module.exports = mongoose.model('StudentProfile', studentProfileSchema);
