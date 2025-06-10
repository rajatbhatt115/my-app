// Controllers mein business logic (data fetch) likha hai
const TeamMember = require('../models/TeamMember');

exports.getTeam = async (req, res) => {
  try {
    const members = await TeamMember.find();
    res.json(members);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
