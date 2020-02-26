const express = require('express');
const router = express.Router();

const meals = require(__dirname + '/../data/meals.json');

// router.get('/meals', (request, response) => {
//    response.send(meals);
// });

router.get('/:id', (req, res) => {
   let id = req.params.id;
   let meal = meals.find((items) => items.id === parseInt(id));
   if (!meal) {
      res.status(404).send(`The meal with the given ID: ${id} was not found`);
   }

   res.send(meal);
});

// ! /meals?title=pizza
// ? /meals?maxPrice=90
// * /meals?limit=4
// ? /meals?createdAfter=2020-02-19

router.get('/', (req, res) => {
   const maxPrice = req.query.maxPrice;
   const title = req.query.title;
   const date = req.query.createdAfter;
   const limit = req.query.limit;
   let meal;

   
   if (maxPrice) {
      meal = meals.filter((items) => items.price < parseInt(maxPrice));
   } else if (title) {
      meal = meals.filter((items) => items.title.includes(title));
   } else if (date) {
      meal = meals.filter(
         (items) => Date.parse(items.createdAt) > Date.parse(date)
      );
   } else if (limit) {
      meal = meals.slice(0, limit);
   }
     else {
       res.status(404).send(`Error: middleware empty !`);
    }

   res.send(meal);
});

module.exports = router;
