const router = require("express").Router();
const studentRoutes = require("./students");
const teacherRoutes = require("./teachers");
const classRoutes = require("./classes")

// Student routes
router.use("/students", studentRoutes);
router.use("/teachers", teacherRoutes);
router.use("/classes", classRoutes)

module.exports = router;
