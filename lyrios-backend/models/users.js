const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    favoriteSong: {type: String},
    email: {type: String}
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

module.exports = User

