const express = require('express');
const { uploadVideo, getVideos } = require('../controllers/videoController');
const { verifyToken, isAdmin } = require('../middleware/auth');
const router = express.Router();

router.post('/', verifyToken, isAdmin, uploadVideo);
router.get('/', getVideos);

module.exports = router;
