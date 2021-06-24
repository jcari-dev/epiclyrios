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