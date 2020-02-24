const router = require("express").Router();
const teachersController = require("../../controllers/teachers");

router.route("/teacher")
    .get(teachersController.getTeachers)
    .post(teachersController.post)