// Express module ko import kar rahe hain (Node.js ke liye popular web framework)
const express = require('express');

// Express ka router object bana rahe hain taaki routes ko alag file me handle kar saken
const router = express.Router();

// teamController se getTeam function ko import kar rahe hain
const { getTeam } = require('../controllers/teamController');

// Jab GET request aaye /api/team par, tab getTeam function ko call kiya jaayega
router.get('/', getTeam);

// Is router ko export kar rahe hain taaki ise main app ya server file me include kiya ja sake
module.exports = router;
