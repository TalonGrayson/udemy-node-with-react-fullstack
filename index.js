const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send({hi: 'there'});
});

app.get('/bye*', (req, res) => {
    res.send({bye: 'buddy'});
});

app.get('/*', (req, res) => {
    res.send({hi: 'here'});
});

app.get('/buddy', (req, res) => {
    res.send({not_your: 'buddy, guy'});
});

const PORT = process.env.PORT || 5000
app.listen(PORT);