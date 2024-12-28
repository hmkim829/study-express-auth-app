const express = require('express');
const mongoose = require("mongoose");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

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
