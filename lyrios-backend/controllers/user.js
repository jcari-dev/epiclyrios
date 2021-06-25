const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
const app = express();

// app.use(cors())
//get new user page
router.get('/user', (req, res) => {
    res.render('./pages/user.js')
})
//create new user
router.post ('/', (req, res) => {
    User.create(req.body, (error, createdUser) => {
        res.redirect('/')
    })
})

module.exports = router;