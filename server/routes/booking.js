const router = require('express').Router();
const Booking = require('../models/Booking');
const protect = require('../middleware/auth');

const PRICES = { pc: 60, ps5: 120, racing: 150 };

// POST /api/bookings
router.post('/', protect, async (req, res) => {
  try {
    const { zone, date, startTime, duration, seat } = req.body;
    const totalCost = PRICES[zone] * duration;
    const booking = await Booking.create({
      user: req.user._id, zone, date, startTime, duration, totalCost, seat
    });
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/bookings/my
router.get('/my', protect, async (req, res) => {
  const bookings = await Booking.find({ user: req.user._id }).sort('-createdAt');
  res.json(bookings);
});

// GET /api/bookings/:id
router.get('/:id', protect, async (req, res) => {
  const booking = await Booking.findById(req.params.id);
  if (!booking) return res.status(404).json({ message: 'Not found' });
  res.json(booking);
});

// PUT /api/bookings/:id/cancel
router.put('/:id/cancel', protect, async (req, res) => {
  const booking = await Booking.findOneAndUpdate(
    { _id: req.params.id, user: req.user._id },
    { status: 'cancelled' }, { new: true }
  );
  if (!booking) return res.status(404).json({ message: 'Not found' });
  res.json(booking);
});

// DELETE /api/bookings/:id (admin)
router.delete('/:id', protect, async (req, res) => {
  await Booking.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;