const express = require('express');
const cors = require('cors');
const environmentState = require('./data/mockDataEnvironment');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.static('dist'));

app.get('/environment', (req, res) => res.json(environmentState));
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
