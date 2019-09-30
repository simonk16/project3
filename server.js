const express = require("express");
const morgan = require("morgan");
const passport = require("passport")
require('./config/passport');
const app = express();
const routes = require("./routes");
const db = require("./models");
const jwt = require("jsonwebtoken")
const jwtSecret = require('./config/jwtConfig')

const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

// routes here

app.use(morgan("dev")); // log every request to the console
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

app.post('/registerUser', (req, res, next) => {
    passport.authenticate('register', (err, user, info) => {
      if (err) {
        console.error("error here" + err);
      }
      if (info !== undefined) {
        console.error(info.message);
        res.status(403).send(info.message);
      } else {
        // eslint-disable-next-line no-unused-vars
        res.status(200).send({ message: 'user created' });
      }
    })(req, res, next);
  });
  
  app.post('/loginUser', (req, res, next) => {
    passport.authenticate('login', (err, users, info) => {
      if (err) {
        console.error(`error ${err}`);
      }
      if (info !== undefined) {
        console.error(info.message);
        if (info.message === 'bad username') {
          res.status(401).send(info.message);
        } else {
          res.status(403).send(info.message);
        }
      } else {
          User.findOne({ username: req.body.username
          }).then(user => {
            const token = jwt.sign({ id: user.id }, jwtSecret.secret, {
              expiresIn: 60 * 60,
            });
            res.status(200).send({
              auth: true,
              token,
              message: 'user found & logged in',
            });
          });
      }
    })(req, res, next);
  });

app.use(routes);



// If running a test, set syncOptions.force to true
// clearing the testdb

// Starting the server, syncing our models ------------------------------------/
    app.listen(PORT, () => {
        console.log(`\u{1F30E}==> Listening on port ${PORT}`);
    });


db.sequelize.sync({force: false})
module.exports = app;
