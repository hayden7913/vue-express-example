const express = require('express');
const cors = require('cors');
const environmentState = require('./data/mockDataEnvironment');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.static('dist'));

app.get('/environment', (req, res) => res.json(environmentState));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
