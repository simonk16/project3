const router = require("express").Router();
const classesController = require("../../controllers/classesController");

router.route("/")
    .get(classesController.getAll)
module.exports = router;
        