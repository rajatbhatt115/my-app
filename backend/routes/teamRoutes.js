// Routes setup: /api/team GET request handle karega
const express = require('express');
const router = express.Router();
const { getTeam } = require('../controllers/teamController');

router.get('/', getTeam);

module.exports = router;
