const router = require("express").Router();
const classesController = require("../../controllers/classesController");

router.route("/")
    .get(classesController.getAll)
    .post(classesController.postClass)
module.exports = router;
        