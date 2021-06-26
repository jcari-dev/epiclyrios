const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
const app = express();

// app.use(cors())
// const session = require('../../pages/session.js')
//user sign in
router.get('/session', (req, res) => {
    res.render('./pages/session.js')
})


module.exports = router;