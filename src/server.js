const express = require('express');
const mongoose = require("mongoose");
const path = require("node:path");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/static', express.static(path.join(__dirname, 'public')));

// view engine configuration
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

mongoose.connect(`mongodb://root:1234@localhost:27017`)
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((err) => {
        console.error(err);
    })

app.get('/login', (req, res) => {
    res.render('login');
})

app.get('/signup', (req, res) => {
    res.render('signup');
})

const port = 4000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
