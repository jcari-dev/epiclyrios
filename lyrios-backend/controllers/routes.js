//Routes 

// const express = require('express');
// const router = express.Router();
// const User = require('../models/users.js');

// const index = require('../src/pages/index.js')

// const app = express();

// app.use(cors())

// //home route test
// router.get('/', (req, res) => {
//     res.json(index)
//     console.log('hello world')
// })
// //index home page
// router.get('/', (req, res) => {
//     User.find({}, (err, foundUsers) => {
//         res.render('pages/index.js', {
//             users: foundUsers,
//             //verify if user is logged in
//             // isLoggedIn: req.session.isLoggedIn
//         })
//     }
//     )})


// //new user - render new user page
// router.get('/new', (req, res) => {
//     res.render('users/new.js')
// })
// //create user and redirect back to home page
// router.post('/', (req, res) => {
//     User.create(req.body, (error, createdUser) => {
//         res.redirect('/')
//     })
// })
// //edit & update


// //delete playlist
// router.post('/', (req, res) => {

// })
// //logout

// module.exports = router;