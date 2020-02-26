const express = require('express');
const app = express();

app.get('/', (req, res) => {
   res.send('Hello World');
});

app.get('/numbers/multiply/:num1/:num2', function(req, res) {
   let num1 = parseInt(req.params.num1);
   let num2 = parseInt(req.params.num2);
   let product = (num1 * num2).toString();
   res.send(`${num1} * ${num2}  = ${product}`);
});
app.get('/numbers/add', function(req, res) {
   let num1 = Number(req.query.first);
   let num2 = Number(req.query.second);
   let sum = (num1 + num2).toString();
   res.send(`${num1} + ${num2}  = ${sum}`);
});

app.listen(3000);
