const router = require('express').Router();

const workoutRoute = require('./workouts');

router.use('/workouts', workoutRoute);

module.exports = router;