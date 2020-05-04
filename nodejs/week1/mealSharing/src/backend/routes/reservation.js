const express = require('express');
const router = express.Router();

const reservationsJson = require(__dirname + '/../data/reservations.json');

router.get('/reservation', (request, response) => {
   let randomReservation =
      reservationsJson[Math.floor(Math.random() * reservationsJson.length)];
   response.send(randomReservation);
});

module.exports = router;
