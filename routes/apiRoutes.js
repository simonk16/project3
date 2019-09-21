let db = require("../models");




module.exports = function (app) {
    app.get("/api/students/", function (req, res) {
        db.Student.findAll({}).then(function(dbStudent){

        }) 
    })
}