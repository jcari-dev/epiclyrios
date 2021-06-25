const express = require('express');
const router = express.Router();
const User = require('../models/users.js');

const app = express();

app.use(cors())