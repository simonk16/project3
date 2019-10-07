const dotenv = require('dotenv').config();
module.exports = {
    development: {
      username: "root",
      password: process.env.DB_PASS,
      database: "test_db",
      host: "127.0.0.1",
      dialect: "mysql"
     
    }
    
  
}

