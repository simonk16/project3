const env = require("dotenv").config();
module.exports = {
  
    development: {
      username: "root",
      password: process.env.DB_PASS,
      database: "test_db",
      host: "localhost",
      dialect: "mysql"
     
    }
}
