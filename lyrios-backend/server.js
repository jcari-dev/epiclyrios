
// const { MongoClient } = require('mongodb');

const express = require('express');
// const cors = require('cors');
const router = express.Router();
const PORT = process.env.PORT || 4000;
const URI = process.env.MONGODB_URI;
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();
const cors = require("cors")
// const connectDB = require('./config/db');

require('dotenv').config();
let bodyParser = require('body-parser');
// connectDB();
// const client = new MongoClient(URI, { useNewUrlParser: true, useUnifiedTopology: true });
// MongoClient.connect(err => {
//   const collection = MongoClient.db("test").collection("devices");
//   // perform actions on the collection object
//   MongoClient.close(collection);
// });
//middleware
// app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(cors())

//controllers
const sessionController = require('./controllers/session.js');
app.use('/session', sessionController);
const showController = require('./controllers/show');
app.use('/show', showController);
const userController = require('./controllers/user');
app.use('/user', userController);

const favoriteSongController = require('./controllers/favoritesong')
app.use('/favsong', favoriteSongController);
// const index = require('././pages/index.js')
app.get('/', (req, res) => {
    res.send('server is working')
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});
mongoose.connect(URI || 'mongodb://localhost:27017/lyriosDB', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongo')
})

// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const passport = require("passport");

// const users = require("./routes/api/users");

// const app = express();
// // Bodyparser middleware
// app.use(
//   bodyParser.urlencoded({
//     extended: false
//   })
// );
// app.use(bodyParser.json());
// // DB Config
// const db = require("./config/keys").mongoURI;
// // Connect to MongoDB
// mongoose
//   .connect(
//     db,
//     { useNewUrlParser: true }
//   )
//   .then(() => console.log("MongoDB successfully connected"))
//   .catch(err => console.log(err));

//  app.use(passport.initialize());
//  require("./config/passport")(passport);
//  app.use("/api/users", users);

// const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
// app.listen(port, () => console.log
// (`Server up and running on port ${port} !`));

