const express = require('express');
const app = express();

const reservationsJson = require(__dirname + '/../data/reservations.json');

app.get('/reservations', (request, response) => {
   response.send(reservationsJson);
});

module.exports = app;
