const path = require("path");
const { Workout } = require("../../models");
const router = require("express").Router();

router.get("/", async function (req, res) {
    try {
        const workout = await Workout.find({});
        res.status(200).json(workout);
    } catch (error) {
        res.status(500).json(error);

    }
});

router.get("/range", async function (req, res) {
    try {
        const workout = await Workout.find()
        res.status(200).json("We got range");
    } catch (error) {
        res.status(500).json(error);

    }
});

router.post("/", async function (req, res) {
    try {
        const workout = await Workout.create(req.body);
        res.status(200).json(workout);
    } catch (error) {
        res.status(500).json(error);

    }
});

router.put("/", function (req, res) {
    try {
        res.status(200).json("We put info");
    } catch (error) {
        res.status(500).json(error);

    }
});


module.exports = router;