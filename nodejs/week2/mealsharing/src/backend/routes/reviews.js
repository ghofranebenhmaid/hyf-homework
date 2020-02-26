const express = require('express');
const router = express.Router();

const reviews = require(__dirname + '/../data/reviews.json');

router.get('/', (req, res) => {
   res.send(reviews);
});

router.get('/:id', (req, res) => {
   const id = req.params.id;
   const review = reviews.find((items) => items.id === parseInt(id));
   if (!review) {
      res.status(404).send(`The meal with the given ID: ${id} was not found`);
   }

   res.send(review);
});

module.exports = router;
