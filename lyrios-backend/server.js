console.log('this works')

const express = require('express')
const cors = require('cors');

const app = express();

//middleware
app.use(cors());

app.get('/', (req, res) => {
    res.send('hello beaches')
})


const PORT = 4000 || process.env.PORT

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));