const mongoose = require('mongoose');

const bannerSchema = new mongoose.Schema({
  page: String,
  imgUrl: String,
  height: String
});

module.exports = mongoose.model('Banner', bannerSchema);
