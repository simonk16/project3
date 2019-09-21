const express = require("express");
const morgan = require("morgan");

const app = express();

const db = require("./models");

const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

// routes here

app.use(morgan("dev")); // log every request to the console
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));


// If running a test, set syncOptions.force to true
// clearing the testdb

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log(`\u{1F30E}==> Listening on port ${PORT}`);
    });
}).catch(function(err){
    console.log(err);
});
module.exports = app;
