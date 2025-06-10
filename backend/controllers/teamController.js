// Controllers mein business logic (data fetch) likha hai

// TeamMember model ko import kar rahe hain jisse team members ka data database se fetch kar sakein
const TeamMember = require('../models/TeamMember');

// getTeam function export kar rahe hain jo saare team members ko fetch karega
exports.getTeam = async (req, res) => {
  try {
    // TeamMember model ka use karke database se saare members ko fetch kar rahe hain
    const members = await TeamMember.find();

    // Fetch kiya gaya data JSON format me client ko bhej rahe hain
    res.json(members);
  } catch (err) {
    // Agar koi error aata hai to usse console me print kar rahe hain
    console.error(err);

    // Aur client ko 500 server error ke saath ek message bhej rahe hain
    res.status(500).json({ message: 'Server error' });
  }
};
