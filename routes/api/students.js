const router = require("express").Router();
const studentsController = require("../../controllers/studentsController");

router.route("/")
    .get(studentsController.getStudents)
    .post(studentsController.postStudent)
module.exports = router;
        