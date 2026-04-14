const router = require('express').Router();
const Tournament = require('../models/Tournament');
const protect = require('../middleware/auth');

router.get('/',        async (req, res) => res.json(await Tournament.find().sort('date')));
router.get('/:id',     async (req, res) => res.json(await Tournament.findById(req.params.id)));
router.post('/',       protect, async (req, res) => res.status(201).json(await Tournament.create(req.body)));

router.post('/:id/register', protect, async (req, res) => {
  const t = await Tournament.findById(req.params.id);
  if (!t) return res.status(404).json({ message: 'Not found' });
  if (t.registeredPlayers.includes(req.user._id))
    return res.status(400).json({ message: 'Already registered' });
  if (t.registeredPlayers.length >= t.maxPlayers)
    return res.status(400).json({ message: 'Tournament is full' });
  t.registeredPlayers.push(req.user._id);
  await t.save();
  res.json(t);
});

module.exports = router;