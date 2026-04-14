const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
require('dotenv').config({ path: path.join(__dirname, 'server', '.env'), override: false });

const app = express();
const PORT = process.env.PORT || 5000;
let databaseConnected = false;

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Gaming Cafe backend is running',
    databaseConnected,
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    ok: true,
    databaseConnected,
    port: PORT,
  });
});

// Routes
app.use('/api/auth',        require('./routes/auth'));
app.use('/api/bookings',    require('./routes/booking'));
app.use('/api/tournaments', require('./routes/tournament'));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);

  if (!process.env.MONGO_URI) {
    console.warn('MONGO_URI is missing. Server started without MongoDB.');
    return;
  }

  mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      databaseConnected = true;
      console.log('MongoDB connected');
    })
    .catch((err) => {
      console.error('MongoDB connection failed:', err.message);
    });
});
