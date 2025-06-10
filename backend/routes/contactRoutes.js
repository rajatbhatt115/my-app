// Express module ko import kar rahe hain (ye Node.js ke liye ek web framework hai)
const express = require('express');

// Express ka router object bana rahe hain jiske through alag-alag routes handle kiye jaate hain
const router = express.Router();

// contactController se createContact function ko import kar rahe hain
const { createContact } = require('../controllers/contactController');

// Jab bhi POST request aaye (jaise contact form submit ho) to createContact function chalega
router.post('/', createContact);

// Is router ko export kar rahe hain taaki ise app.js ya server.js me include kiya ja sake
module.exports = router;
