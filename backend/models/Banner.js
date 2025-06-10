// Mongoose (MongoDB ke saath kaam karne ke liye library) ko import kar rahe hain
const mongoose = require('mongoose');

// Banner ke liye ek schema define kar rahe hain jisme 3 fields hain:
// 1. page - kis page ka banner hai (jaise 'home', 'about')
// 2. imgUrl - banner image ka URL
// 3. height - image ki height (CSS ke liye)
const bannerSchema = new mongoose.Schema({
  page: String,
  imgUrl: String,
  height: String
});

// Is schema ko 'Banner' model me convert karke export kar rahe hain
// Jisse hum is model ka use karke database me data save ya fetch kar sakein
module.exports = mongoose.model('Banner', bannerSchema);
