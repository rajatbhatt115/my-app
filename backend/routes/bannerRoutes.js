// Express module ko import kar rahe hain (ye Node.js ka ek web framework hai)
const express = require('express');

// Express ka router object bana rahe hain taaki alag alag routes ko manage kar sakein
const router = express.Router();

// Banner controller se getBannerByPage function ko import kar rahe hain
const { getBannerByPage } = require('../controllers/bannerController');

// Jab bhi GET request aaye kisi specific page ke liye (jaise /banner/home), to getBannerByPage function chalega
router.get('/:page', getBannerByPage);

// Is router ko export kar rahe hain taaki isse app.js ya server.js me use kar sakein
module.exports = router;
