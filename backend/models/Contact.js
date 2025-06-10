// Mongoose (MongoDB ke saath kaam karne ka library) ko import kar rahe hain
const mongoose = require('mongoose');

// Contact form ka structure (schema) define kar rahe hain
const contactSchema = new mongoose.Schema({
  // User ka naam store karne ke liye field
  name: String,

  // User ka email store karne ke liye field
  email: String,

  // User ka message store karne ke liye field
  message: String,

  // Ye field batata hai ki contact form kab submit kiya gaya (automatic tarike se aaj ki date daal dega)
  createdAt: {
    type: Date,          // Field ka type Date hai
    default: Date.now,   // Agar user date na de to by default current date daal dega
  },
});

// Schema ko MongoDB model me convert kar rahe hain aur 'Contact' naam se export kar rahe hain
// Ye model aapko database me data insert, find, update, delete karne me madad karega
module.exports = mongoose.model('Contact', contactSchema);
