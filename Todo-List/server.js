'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, 'data.json');

const app = express();
app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    if(fs.existsSync(dataFile))
        res.json(fs.readFileSync(dataFile));
    else
        res.json({});
});

app.post('/', (req, res) => {
    fs.writeFileSync(dataFile, JSON.stringify(req.body));
    res.json(req.body);
});

app.listen(8080, 'localhost', function() {
    console.log('Server started on http://localhost:8080/dist/index.html');
});
