const express = require('express');
const router = express.Router();

const mealsJson = require(__dirname + '/../data/meals.json');
const reviewsJson = require(__dirname + '/../data/reviews.json');

const cheapMealsArray = mealsJson.filter((cheapMeals) => cheapMeals.price < 50);
cheapMealsArray.forEach((meal) => {
   meal.review = [];
   reviewsJson.forEach((mealreview) => {
      if (mealreview.mealId === meal.id) {
         meal.review.push(mealreview);
      }
   });
});

router.get('/cheap-meals', (request, response) => {
   response.send(cheapMealsArray);
});

module.exports = router;
