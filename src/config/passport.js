const passport = require('passport')
const User = require('../models/user.model')
const LocalStrategy = require('passport-local')

passport.use(new LocalStrategy({usernameField: 'email', passwordField: 'password'},
    (email, password, done) => {
        User.findOne({
            email: email.toLowerCase(),
        }, (err, user) => {
            if (err) return done(err);

            if(!user) {
                return done(null, false, {msg: `Email ${email} not found`});
            }

            user.comparePassword(password, (err, isMatch) => {
                if (err) return done(err);

                if (isMatch) {
                    return done(null, user);
                }

                return done(null, false, {msg: 'Wrong email or password'});
            });
        })
    }
))