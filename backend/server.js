// server.js — Main backend server entry point (yani backend yahi se start hota hai)

// ✅ .env file se environment variables (jaise MONGO_URI, PORT) ko load karte hain
require('dotenv').config();

const express = require('express');       // Express framework ko import kar rahe hain
const cors = require('cors');             // Cross-Origin Resource Sharing enable karne ke liye
const mongoose = require('mongoose');     // MongoDB ke saath kaam karne ke liye mongoose
const path = require('path');             // File path handle karne ke liye (Node.js ka inbuilt module)

// ✅ Express app create kar rahe hain
const app = express();

// ✅ Alag-alag route modules import kar rahe hain
const contactRoutes = require('./routes/contactRoutes');   // Contact form ke routes
const bannerRoutes = require('./routes/bannerRoutes');     // Banner image ke routes
const teamRoutes = require('./routes/teamRoutes');         // Team members ke routes

// ✅ Middleware setup
app.use(cors());               // CORS enable karte hain taaki frontend backend se baat kar sake
app.use(express.json());       // Incoming JSON data ko automatically parse karne ke liye

// ✅ Static files serve karne ke liye (images ya uploads ko direct access dena)
// /uploads folder ko publicly access karne ke liye setup
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// /uploads/img folder ko /img ke through access karne ke liye setup
app.use('/img', express.static(path.join(__dirname, 'uploads/img')));

// ✅ API ke routes define kar rahe hain
app.use('/api/contact', contactRoutes);   // Jab /api/contact pe request aaye to contactRoutes chale
app.use('/api/banner', bannerRoutes);     // Jab /api/banner pe request aaye to bannerRoutes chale
app.use('/api/team', teamRoutes);         // Jab /api/team pe request aaye to teamRoutes chale

// ✅ Root route - Jab koi root URL par aaye ("/") to simple message show karo
app.get('/', (req, res) => {
  res.send('✅ Server is up and running');  // Server status ka confirmation message
});

// ✅ Purane hardcoded banner routes hata diye gaye hain
// Ab naye dynamic route ka use ho raha hai: GET /api/banner/:page

// ✅ MongoDB se connect ho rahe hain
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,         // MongoDB driver ka latest URL parser use karna
  useUnifiedTopology: true       // MongoDB ka naya connection engine use karna
})
.then(() => console.log('✅ MongoDB connected'))              // Connection successful hone par message
.catch(err => console.error('❌ MongoDB connection error:', err));  // Agar error aaye to show karo

// ✅ Server ko start kar rahe hain
const PORT = process.env.PORT || 5000;  // Ya to .env ka PORT use karo, ya default 5000
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);  // Server start hone par URL print karo
});
