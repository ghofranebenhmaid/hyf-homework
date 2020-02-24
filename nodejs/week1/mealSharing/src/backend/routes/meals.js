const express = require('express');
const router = express.Router();

const mealsJson = require(__dirname + '/../data/meals.json');
const reviewsJson = require(__dirname + '/../data/reviews.json');

mealsJson.forEach((meal) => {
   meal.review = [];
   reviewsJson.forEach((mealreview) => {
      meal.review.push(mealreview);
   });
});

router.get('/meals', (request, response) => {
   response.send(mealsJson);
});

module.exports = router;
