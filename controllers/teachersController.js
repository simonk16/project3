const db = require("../models");

module.exports = {
    getAll: (req, res) => {
        db.Teacher.findAll()
            .then(teachers => {
                res.json(teachers)
            }).catch(err => {
                res.json(err)
            });
    },
    createNew: (req, res) => {
        db.Teacher.create(req.body)
            .then(createdTeach => {
                res.json(createdTeach)
            }).catch(err => {
                res.json(err)
            });
    },
    findOne: (req, res) => {
        db.Teacher.findOne({
            where: {
                id: req.params.id
            }
        }).then(teacher => {
            res.json(teacher)
        }).catch(err => {
            res.json(err)
        });
    },
    delete: (req, res) => {
        db.Teacher.destroy({
            where: {
                id: req.params.id
            }
        }).then(deletedTeach => {
            res.json(deletedTeach)
        });
    },
    update: (req, res) => {
        db.Teacher.findOne({
            where: {
                id: req.params.id
            }
        }).then(teacher => {
            if (teacher) {
                teacher.update({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName
                }).then(updatedTeacher => {
                    res.json(updatedTeacher)
                }).catch(err => {
                    res.json(err)
                });
            }
        }).catch(err => {
            res.json(err)
        })
    }
}