const path = require("path");
const router = require("express").Router();

router.get("/", function (req, res) {
    try {
        res.status(200).json("Lets Go");
    } catch (error) {
        res.status(500).json(error);

    }
});



module.exports = router;