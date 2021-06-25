const express = require('express');
const router = express.Router();
const User = require('../models/users.js');

const app = express();

app.use(cors())

//user sign in
router.get('/session', (req, res) => {
    res.json('./pages/sessions.js')
})

module.exports = router;