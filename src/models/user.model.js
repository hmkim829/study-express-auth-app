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

userSchema.methods.comparePassword = function (plainPassword, cb) {
    if(plainPassword === this.password) {
        cb(null, true);
    } else {
        cb(null, false);
    }

    return cb({error: 'Incorrect password'});
}


const User  = mongoose.model("User", userSchema);

module.exports = User;