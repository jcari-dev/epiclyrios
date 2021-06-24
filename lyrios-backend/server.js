console.log('this works')

const express = require('express');
const cors = require('cors');
const router = express.Router();

//middleware
const app = express();
app.use(cors());

//controllers
const sessionController = require('./controllers/routes.js');
app.use('/session', sessionController);
const showController = require('./controllers/show');
app.use('/show', showController);
const userController = require('./controllers/user');
app.use('/user', userController);


app.get('/', (req, res) => {
    res.send('hello world')
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));