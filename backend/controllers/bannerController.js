// controllers/bannerController.js
const Banner = require('../models/Banner');

exports.getBannerByPage = async (req, res) => {
  try {
    const page = req.params.page;
    const banner = await Banner.findOne({ page });

    if (!banner) {
      return res.status(404).json({ error: 'Banner not found' });
    }

    res.json({ imgUrl: banner.imgUrl, height: banner.height });
  } catch (err) {
    console.error('Failed to fetch banner:', err);
    res.status(500).json({ error: 'Server error' });
  }
};
