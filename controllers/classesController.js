const db = require("../models");

module.exports = {
    getAll: (req, res)  => {
        db.Class.findAll({
            include: [
                {
                    model: db.Student
                    
                },
                {
                    model: db.Teacher
                }
               
            ]
        }).then(data => {
            res.json(data)
        })
    },

    postClass: (req, res) => {
        db.Class.create(req.body).then(newClass => {
            res.json(newClass)
        }).catch(err => {
            res.json(err)
        })
    }
}
