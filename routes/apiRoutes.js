let db = require("../models/student");




module.exports = (app) => {
    app.get("/api/students/", (req, res) => {
        db.findAll({}).then(response => {
            return response
        })
    })
}