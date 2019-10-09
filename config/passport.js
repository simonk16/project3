const bcrypt = require('bcrypt');

const BCRYPT_SALT_ROUNDS = 12;

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../models/');

passport.use(
  'register',
  new LocalStrategy({
      username: 'username',
      password: 'password',
      passReqToCallback: true,
      session: false,
    },
    (req, username, password, done) => {
      console.log(username);
      console.log(req.body.isStudent);
      if (req.body.isStudent === true) {
        try {
          db.Student.findOne({
            where: {
              userName: username
            }
          }).then(user => {
            if (user != null) {
              console.log('username or email already taken');
              return done(null, false, {
                message: 'username or email already taken',
              });
            }
            bcrypt.hash(password, BCRYPT_SALT_ROUNDS).then(hashedPassword => {
              db.Student.create({
                userName: username,
                password: hashedPassword,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                ClassId: req.body.ClassId
              }).then(user => {
                console.log('user created');
                return done(null, user);
              });
            });
          });
        } catch (err) {
          return done(err);
        }

      } else {
        try {
          db.Teacher.findOne({
            where: {
              userName: username
            }
          }).then(user => {
            if (user != null) {
              console.log('username or email already taken');
              return done(null, false, {
                message: 'username or email already taken',
              });
            }
            bcrypt.hash(password, BCRYPT_SALT_ROUNDS).then(hashedPassword => {
              db.Teacher.create({
                username: username,
                password: hashedPassword,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                ClassId: req.body.ClassId,
                isStudent: req.body.isStudent
              }).then(user => {
                console.log('user created');
                return done(null, user);
              });
            });
          });
        } catch (err) {
          return done(err);
        }
      }
    },
  ),
);

passport.use(
  'login',
  new LocalStrategy({
      usernameField: 'username',
      passwordField: 'password',
      session: false,
    },
    (username, password, done) => {
      try {
        db.Student.findOne({
          where: {
            userName: username
          }
        }).then(user => {
          if (user === null) {
            db.Teacher.findOne({
              where: {
                userName: username
              }
            }).then(user => {
              if (user === null) {
                return done(null, false, {
                  message: 'bad username'
                });
              }
              bcrypt.compare(password, user.password).then(response => {
                if (response !== true) {
                  console.log('passwords do not match');
                  return done(null, false, {
                    message: 'passwords do not match'
                  });
                }
                console.log('user found & authenticated');
                return done(null, user);
              });

            }).then(err2 => {
              console.log(err2)
            })



          }
          bcrypt.compare(password, user.password).then(response => {
            if (response !== true) {
              console.log('passwords do not match');
              return done(null, false, {
                message: 'passwords do not match'
              });
            }
            console.log('user found & authenticated');
            return done(null, user);
          });
        }).catch(err1 => {
          console.log(err1)
        })
      } catch (err) {
        done(err);
      }
    },
  ),
);