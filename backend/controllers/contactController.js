// controllers/contactController.js

// Contact model ko import kar rahe hain jisse hum contact data database me save kar sakein
const Contact = require('../models/Contact');

// Ek function export kar rahe hain jo naya contact form ka data save karega
exports.createContact = async (req, res) => {
  try {
    // Request body se name, email, aur message nikaal rahe hain
    const { name, email, message } = req.body;

    // Contact model ka ek naya object bana rahe hain us data ke saath
    const newContact = new Contact({ name, email, message });

    // Database me contact ko save kar rahe hain
    await newContact.save();

    // Agar save ho gaya to client ko success message ke saath 201 status bhej rahe hain
    res.status(201).json({ message: 'Contact saved successfully' });
  } catch (err) {
    // Agar koi error aata hai (jaise database issue), to console me print kar rahe hain
    console.error('Failed to save contact:', err);

    // Aur client ko 500 server error ka response bhej rahe hain
    res.status(500).json({ error: 'Failed to save contact' });
  }
};
