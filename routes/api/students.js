const router = require("express").Router();
const studentsController = require("../../controllers/studentsController");

router.route("/")
    .get(studentsController.getStudents)
    .post(studentsController.postStudent);

router.route("/:id")
    .get(studentsController.findOneStudent)
    .delete(studentsController.deleteById)
module.exports = router;
        