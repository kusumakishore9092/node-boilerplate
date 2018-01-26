'use strict';
const express = require('express');
const app = express();
const react = require('react');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => res.send('Hello World!'));
app.get('/something', (req,res) => {
     res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
