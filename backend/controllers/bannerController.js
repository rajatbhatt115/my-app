// controllers/bannerController.js

// Banner model ko import kar rahe hain jisse hum database se data fetch kar sakein
const Banner = require('../models/Banner');

// Ek function export kar rahe hain jo kisi particular page ke banner ko fetch karega
exports.getBannerByPage = async (req, res) => {
  try {
    // URL se 'page' parameter nikaal rahe hain (jaise: /api/banner/home)
    const page = req.params.page;

    // Database me se us page ka banner dhoondh rahe hain
    const banner = await Banner.findOne({ page });

    // Agar banner nahi mila to 404 error bhej rahe hain
    if (!banner) {
      return res.status(404).json({ error: 'Banner not found' });
    }

    // Agar banner mil gaya to uska image URL aur height response me bhej rahe hain
    res.json({ imgUrl: banner.imgUrl, height: banner.height });
  } catch (err) {
    // Agar koi error aata hai (jaise database connection ka), to console me print kar rahe hain
    console.error('Failed to fetch banner:', err);

    // Aur client ko 500 server error ka response de rahe hain
    res.status(500).json({ error: 'Server error' });
  }
};
