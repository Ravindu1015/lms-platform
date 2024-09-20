const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');
const Video = require('./Video');

const WatchHistory = sequelize.define('WatchHistory', {
  watchedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

WatchHistory.belongsTo(User);
WatchHistory.belongsTo(Video);

module.exports = WatchHistory;
