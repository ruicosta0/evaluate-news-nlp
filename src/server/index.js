const dotenv = require('dotenv');
dotenv.config();

const apiKey = process.env.API_KEY;

console.log(`Your API key is ${process.env.API_KEY}`);

var path = require('path');

const express = require('express');

const mockAPIResponse = require('./mockAPI.js');

const app = express();

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

app.use(express.static('dist'));

console.log(__dirname);

app.get('/', function (req, res) {
    res.sendFile(path.resolve('src/client/views/index.html'));
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!');
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
});

// route to pass apiKey to client side
app.get('/all', function (req, res) {
    res.send({
        'key': apiKey
    });
});
