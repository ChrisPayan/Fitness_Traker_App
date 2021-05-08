const path = require("path");
const router = require("express").Router();

router.get("/", function (req, res) {
    try {
        res.status(200).json("We got info");
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