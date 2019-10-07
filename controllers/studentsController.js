const db = require("../models");

// Defining methods for the studentsController
module.exports = {
    getStudents: async function (req, res) {
        console.log("HERE!!!!!!")
        db.Student.findAll({
            raw: true
        }).then(students => {
            console.log(students)
            res.json(students)
        }).catch(err => {
            res.json(err)
        })

        // console.log("Hello")
        // try {
        //     const response = await db.Student.findAll();
        //     res.json(response)
        // } catch (error) {
        //     res.json(error)
        // }
    },
    postStudent: (req, res) => {
        db.Student.create(req.body).then(dbStudent => {
            res.json(dbStudent)
        }).catch(err => {
            res.json(err)
        })
    },
    findOneStudent: (req, res) => {
        db.Student.findOne({
            where: {
                id: req.params.id
            }
        }).then(student => {
            res.json(student)
        }).catch(err => {
            res.json(err)
        })
    },

    findStudentsByClass: (req, res) => {

        db.Student.findAll({
            where: {
                ClassId: req.params.ClassId
            }
        }).then(students => {
            res.json(students)
        }).catch(err => {
            res.json(err)
        })
    },

    deleteById: (req, res) => {
        db.Student.destroy({
            where: {
                id: req.params.id
            }
        }).then(removedStudent => {
            res.json(removedStudent)
        }).catch(err => {
            res.json(err)
        })
    },

    updateStudentPoints: (req, res) => {

        db.Student.findOne({
            where: {
                id: req.params.id
            }
        }).then(student => {
            return student.increment("points", {by: 1}).then(student => {
                student.reload();
                res.json(student)
            }).catch(err2 => {
                res.json(err2)
            })
        }).catch(err1 => {
            res.json(err1)
        });

        // db.Student.find({
        //     where: {
        //         id: req.params.id
        //     }
        // }).then(student => {
        //     const newScore = student.points + 1
        //     db.Student.update({
        //         points: newScore
        //     }, ).then(updatedStudent => {
        //         res.json(updatedStudent)
        //     }).catch(err2 => {
        //         res.json(err2)
        //     })
        // }).catch(err1 => {
        //     res.json(err1)
        // })

    }


}