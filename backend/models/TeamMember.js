// TeamMember.model mein schema define kiya hai
const mongoose = require('mongoose');

const TeamMemberSchema = new mongoose.Schema({
  name: String,
  designation: String,
  imgUrl: String
});

module.exports = mongoose.model('TeamMember', TeamMemberSchema);
