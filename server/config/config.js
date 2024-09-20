require('dotenv').config();

module.exports = {
  db: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
  },
  jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret',
  jwtExpiration: '24h', // Token expiration
};
