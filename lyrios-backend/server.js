console.log('this works')

const express = require('express');
const cors = require('cors');

//middleware
app.use(cors());

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));