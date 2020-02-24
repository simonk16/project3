const env = require("dotenv").config();
module.exports = {
  
    "development": {
      username: "root",
      password: process.env.DB_PASS,
      database: "test_db",
      host: "127.0.0.1",
      dialect: "mysql"
     
    },
    "production": {
      username: "z2o6any2advvrquw",
      password: "i2fbs37v4yng532h",
      database: "l86mavy1z1xtre3k",
      host: "s9xpbd61ok2i7drv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
      dialect:"mysql"
    }
}
