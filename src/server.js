const express = require('express');
const mongoose = require("mongoose");
const path = require("node:path");
const User = require("./models/user.model");
const passport = require("passport");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/static', express.static(path.join(__dirname, 'public')));

// passport configuration
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport');

// view engine configuration
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// mongoDB configuration
mongoose.connect(`mongodb://root:1234@localhost:27017`)
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((err) => {
        console.error(err);
    })

const port = 4000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

// ========== API ==========

app.get('/login', (req, res) => {
    res.render('login');
})

app.post('login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err);
        }

        if (!user) {
            return res.json({
                msg: info
            })
        }

        res.logIn(user, (err) => {
            if (err) return next(err);
            res.redirect('/');
        });
    })
})

app.get('/signup', (req, res) => {
    res.render('signup');
})

app.post('/signup', async (req, res) => {
     const user = new User(req.body);
     try {
        await user.save();
        return res.status(200).json({
            success: true
        });
     } catch (error) {
        console.log(error);
     }
})
