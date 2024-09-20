const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Video = sequelize.define('Video', {
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  year: { type: DataTypes.INTEGER, allowNull: false }, // Year the video is intended for
  videoUrl: { type: DataTypes.STRING, allowNull: false }, // Path to video file
});

module.exports = Video;
