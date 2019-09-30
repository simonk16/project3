const db = require("../models");

// Defining methods for the studentsController
module.exports = {
  getStudents: function(req, res) {
    db.Student.findAll().then(students => {
        res.json(students)
      }).catch(err => {
          res.json(err)
      })
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
  }
}