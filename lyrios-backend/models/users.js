const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new mongoose.Schema({
    givenName: {type: String},
    googleId: {tyoe: String},
    imageUrl: {type: String},
    favoriteSong: {type: String},
    email: {type: String}
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

module.exports = User

