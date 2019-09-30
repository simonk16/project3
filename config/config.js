<<<<<<< HEAD
const env = require("dotenv").config();
module.exports = {
  
=======
const dotenv = require('dotenv').config();
module.exports = {
>>>>>>> origin/master
    development: {
      username: "root",
      password: process.env.DB_PASS,
      database: "test_db",
      host: "localhost",
      dialect: "mysql"
     
    }
<<<<<<< HEAD
}

  
=======
    
  
}

>>>>>>> origin/master
