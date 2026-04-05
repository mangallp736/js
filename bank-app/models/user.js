const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    pin: String,
    balance: { type: Number, default: 10000},
    history: []
});


module.exports = mongoose.model("User", userSchema);