// routes/studentProfileRoutes.js

const express = require('express');
const { getProfile, updateProfile } = require('../controllers/studentProfileController');
const router = express.Router();
const { authenticate } = require('../helpers/auth'); // Import your authentication middleware

// Routes for student profile
router.get('/', authenticate, getProfile); // Middleware to authenticate user
router.post('/', authenticate, updateProfile); // Middleware to authenticate user

module.exports = router;
