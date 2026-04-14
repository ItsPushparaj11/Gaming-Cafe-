const mongoose = require('mongoose');

const tournamentSchema = new mongoose.Schema({
  title:       { type: String, required: true },
  game:        { type: String, required: true },
  date:        { type: Date, required: true },
  prizePool:   { type: Number, required: true },
  maxPlayers:  { type: Number, required: true },
  registeredPlayers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  status:      { type: String, enum: ['upcoming','ongoing','completed'], default: 'upcoming' },
  description: { type: String },
});

module.exports = mongoose.model('Tournament', tournamentSchema);