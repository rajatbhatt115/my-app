// controllers/contactController.js
const Contact = require('../models/Contact');

exports.createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: 'Contact saved successfully' });
  } catch (err) {
    console.error('Failed to save contact:', err);
    res.status(500).json({ error: 'Failed to save contact' });
  }
};
