const router = require("express").Router();
const teachersController = require("../../controllers/teachersController");

router.route("/")
    .get(teachersController.getAll)
    .post(teachersController.createNew)

router.route("/:id")
    .get(teachersController.findOne)
    .delete(teachersController.delete)
    .put(teachersController.update)
module.exports = router;
        