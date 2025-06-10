// routes/bannerRoutes.js
const express = require('express');
const router = express.Router();
const { getBannerByPage } = require('../controllers/bannerController');

router.get('/:page', getBannerByPage);

module.exports = router;
