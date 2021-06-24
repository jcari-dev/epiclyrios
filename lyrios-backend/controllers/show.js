const express = require('express');
const router = express.Router();
const User = require('../models/users.js');

const app = express();

app.use(cors())
//get show page
router.get('/show', (req, res) => {
    res.render('./pages/show.js')
})

module.exports = router;