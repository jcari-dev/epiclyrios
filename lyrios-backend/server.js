const { MongoClient } = require('mongodb');
const express = require('express');
// const cors = require('cors');
const router = express.Router();
const PORT = process.env.PORT || 4000;
const URI = process.env.MONGODB_URI;
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();

require('dotenv').config();
let bodyParser = require('body-parser')
// const client = new MongoClient(URI, { useNewUrlParser: true, useUnifiedTopology: true });
// MongoClient.connect(err => {
//   const collection = MongoClient.db("test").collection("devices");
//   // perform actions on the collection object
//   MongoClient.close(collection);
// });
//middleware
// app.use(cors());
router.use(express.urlencoded({extended:true}));
router.use(express.json());
router.use(express.static('public'));
router.use(methodOverride('_method'));
router.use(bodyParser.json());

//controllers
const sessionController = require('./controllers/session.js');
router.use('/session', sessionController);
const showController = require('./controllers/show');
router.use('/show', showController);
const userController = require('./controllers/user');
router.use('/user', userController);


app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});
mongoose.connect('mongodb://localhost:27017/lyriosDB', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongo')
})

