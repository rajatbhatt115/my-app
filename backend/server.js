// server.js — Main backend server entry point

// ✅ Load environment variables (like MONGO_URI, PORT)
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

// ✅ Create Express app
const app = express();

// ✅ Import route modules
const contactRoutes = require('./routes/contactRoutes');
const bannerRoutes = require('./routes/bannerRoutes');
const teamRoutes = require('./routes/teamRoutes');

// ✅ Middleware setup
app.use(cors());               // Enable Cross-Origin requests
app.use(express.json());       // Parse incoming JSON request bodies

// ✅ Serve static files (images, etc.)
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // general static uploads
app.use('/img', express.static(path.join(__dirname, 'uploads/img'))); // serve /uploads/img as /img

// ✅ API Routes
app.use('/api/contact', contactRoutes);   // Contact form
app.use('/api/banner', bannerRoutes);     // Banner images (from MongoDB)
app.use('/api/team', teamRoutes);         // Team member data (from MongoDB)

// ✅ Default root route
app.get('/', (req, res) => {
  res.send('✅ Server is up and running');
});

// ✅ Remove old hardcoded banner routes (if any)
// Now handled dynamically with: GET /api/banner/:page

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
