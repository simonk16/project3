let Student = require("../models/Student");
let Class = require("../models/Class");
let Teacher = require("../models/Teacher");

module.exports = function (app) {
    app.get("/api/students/", function (req, res) {
        Student.findall({}).then(function(dbStudent){

        }) 
    })
}