const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user:      { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  zone:      { type: String, enum: ['pc','ps5','racing'], required: true },
  seat:      { type: String },
  date:      { type: Date, required: true },
  startTime: { type: String, required: true },
  duration:  { type: Number, required: true }, // in hours
  totalCost: { type: Number, required: true },
  status:    { type: String, enum: ['pending','confirmed','cancelled'], default: 'confirmed' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Booking', bookingSchema);