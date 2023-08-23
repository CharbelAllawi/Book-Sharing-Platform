const mongoose = require("mongoose");



const usersSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true,
    },
    password: String,

}, {
    timestamps: true
})

const model = mongoose.model("User", usersSchema);
module.exports = model;