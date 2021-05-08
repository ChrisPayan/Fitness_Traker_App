const path = require("path");
const router = require("express").Router();
const db = require("../../models");

router.get("/", async function (req, res) {
    try {
        const workout = await db.Workout.find({});
        res.status(200).json(workout);
    } catch (error) {
        res.status(500).json(error);

    }
});

router.get("/range", function (req, res) {
    try {
        res.status(200).json("We got range");
    } catch (error) {
        res.status(500).json(error);

    }
});

router.post("/", function (req, res) {
    try {
        res.status(200).json("We posted info");
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