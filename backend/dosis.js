const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
const environmentData = require('./data/mockDataEnvironment');

app.get('/', (req, res) => res.json(environmentData));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
