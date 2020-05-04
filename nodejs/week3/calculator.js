const express = require('express');
const app = express();

app.get('/', (req, res) => {
   res.send('<h1> Calculator </1>');
});

// ! localhost:3000/calculator/add?firstParam=1&secondParam=2
app.get('/calculator/:params', (req, res) => {
   const numbers = [];
   for (const key in req.query) {
      const number = Number(req.query[key]);
      numbers.push(number);
   }

   if (req.params.params === 'multiply') {
      let result = numbers.reduce((x, y) => x * y);
      res.send(result.toString());
   } else if (req.params.params === 'add') {
      let result = numbers.reduce((x, y) => x + y);
      res.send(result.toString());
   } else if (req.params.params === 'subtract') {
      let result = numbers.reduce((x, y) => x - y);
      res.send(result.toString());
   } else if (req.params.params === 'division') {
      let result = numbers.reduce((x, y) => x / y);
      res.send(result.toString());
   }
});

app.listen(3000);
