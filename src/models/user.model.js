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
    googleId: {
        type: String,
        unique: true,
        sparse: true
    }
})

const User  = mongoose.model("User", userSchema);

module.exports = User;