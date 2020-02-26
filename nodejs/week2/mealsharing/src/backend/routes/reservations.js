const express = require('express');
const router = express.Router();

const reservations = require(__dirname + '/../data/reservations.json');

router.get('/', (request, response) => {
   response.send(reservations);
});

router.get('/:id', (req, res) => {
   const id = Number(req.params.id);
   const reservation = reservations.find((items) => items.id === id);
   if (!reservation) {
      res.status(404).send(`The meal with the given ID: ${id} was not found`);
   }
   res.send(reservation);
});

module.exports = router;
