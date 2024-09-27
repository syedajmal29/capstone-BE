const express = require("express");
const Application = require('../models/applicationSchema'); // Import the Application model
const router = express.Router();

// POST route for creating a new application
router.post("/api/student/applications", async (req, res) => {
    console.log(req.body); // Log the incoming request body
    try {
        const applicationData = req.body; // Destructure applicationData from request body

        // Check if applicationData exists
        if (!applicationData) {
            return res.status(400).json({ message: "applicationData is required." });
        }

        // Destructure properties from applicationData
        const {
            jobTitle,
            jobDescription,
            skills,
            deadline,
            jobTitleuser,
            coverLetter,
            resume,
            fullName,
            contactAddress,
            phoneNumber,
            emailAddress,
            dateOfBirth,
            highestEducation,
            schoolsAttended,
            majorFieldOfStudy,
            skillsQualifications,
            experience,
            achievements,
        } = applicationData;

        // Validate required fields
        if (!jobTitle || !fullName || !emailAddress || !phoneNumber) {
            return res.status(400).json({ message: "jobTitle, fullName, emailAddress, and phoneNumber are required." });
        }

        // Create a new application instance
        const application = new Application({
            jobTitle,
            jobDescription,
            skills,
            deadline,
            jobTitleuser,
            coverLetter,
            resume,
            fullName,
            contactAddress,
            phoneNumber,
            emailAddress,
            dateOfBirth,
            highestEducation,
            schoolsAttended,
            majorFieldOfStudy,
            skillsQualifications,
            experience,
            achievements,
        });

        // Save the application to the database
        await application.save();
        res.status(201).json({ message: "Application submitted successfully", application });
    } catch (error) {
        console.error('Error saving application:', error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});

// GET route for retrieving all applications
router.get("/api/student/applications", async (req, res) => {
    try {
        const applications = await Application.find({});
        res.json(applications);
    } catch (error) {
        console.error('Error fetching applications:', error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});

// Optionally, you can add a GET route to retrieve applications by user (e.g., by full name or email)
router.get("/api/student/applications/:email", async (req, res) => {
    const { email } = req.params;
    try {
        const applications = await Application.find({ emailAddress: email });
        res.json(applications);
    } catch (error) {
        console.error('Error fetching applications:', error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});

module.exports = router;
