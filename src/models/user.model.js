const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        minlength: 5
    },
    gooleId: {
        type: String,
        unique: true
    }
})

const User  = mongoose.model("User", userSchema);

module.exports = User;