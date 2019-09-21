const express = require("express");
const morgan = require("morgan");

const app = express();

const db = require("./models");

const PORT = process.env.PORT || 3000;


// routes here

app.use(morgan("dev")); // log every request to the console
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

var syncOptions = { force: false };
// If running a test, set syncOptions.force to true
// clearing the testdb
if (process.env.NODE_ENV === "test") {
    syncOptions.force = true;
}
// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
    });
}).catch(function(err){
    console.log(err);
});
module.exports = app;
