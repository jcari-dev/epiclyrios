<<<<<<< HEAD
console.log('this works')

const express = require('express');
const cors = require('cors');
const router = express.Router();

//middleware
const app = express();
app.use(cors());

// const routeController = require('./controllers/routes.js');
// app.use('/', routeController)

app.get('/', (req, res) => {
    res.send('hello world')
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
=======
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");

const app = express();
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

 app.use(passport.initialize());
 require("./config/passport")(passport);
 app.use("/api/users", users);

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log
(`Server up and running on port ${port} !`));
>>>>>>> 8b4bc2a3a3f969348e8cc6c20b61b42cef1c5b81
