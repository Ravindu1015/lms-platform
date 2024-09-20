const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const videoRoutes = require('./routes/videoRoutes');
const profileRoutes = require('./routes/profileRoutes');
const sequelize = require('./config/db');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); // Serve uploaded files

app.use('/api/auth', authRoutes);
app.use('/api/videos', videoRoutes);
app.use('/api/profile', profileRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => console.log('Server running on port 3000'));
});
