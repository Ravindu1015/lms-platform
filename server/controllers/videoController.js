const Video = require('../models/Video');
const multer = require('multer');
const path = require('path');

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to filename
  },
});
const upload = multer({ storage }).single('video');

exports.uploadVideo = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) return res.status(500).json({ error: 'File upload error' });

    try {
      const { title, description, year } = req.body;
      const video = await Video.create({
        title,
        description,
        year,
        videoUrl: `/uploads/${req.file.filename}`,
      });
      res.status(201).json(video);
    } catch (error) {
      res.status(500).json({ error: 'Error uploading video' });
    }
  });
};

exports.getVideos = async (req, res) => {
  const videos = await Video.findAll();
  res.json(videos);
};
