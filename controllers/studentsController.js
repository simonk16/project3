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
      
  }
}