// Mongoose ko import kar rahe hain (jo MongoDB ke saath kaam karne ke liye use hota hai)
const mongoose = require('mongoose');

// TeamMember ka schema define kar rahe hain (ye batata hai ki ek team member ke paas kaun kaun se data honge)
const TeamMemberSchema = new mongoose.Schema({
  // Team member ka naam
  name: String,

  // Team member ka pad ya role (jaise Developer, Designer, etc.)
  designation: String,

  // Team member ki image ka URL (image kaha store hai uska link)
  imgUrl: String
});

// Schema ko ek model me badal rahe hain jiska naam 'TeamMember' hoga
// Ye model database me team members ko create, read, update, delete karne ke kaam aayega
module.exports = mongoose.model('TeamMember', TeamMemberSchema);
