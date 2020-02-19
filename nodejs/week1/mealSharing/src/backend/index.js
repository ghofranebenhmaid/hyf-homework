const express = require('express');
const app = express();

app.get('/meals', require('./routes/meals'));
app.get('/meal', require('./routes/meal'));
app.get('/reservation', require('./routes/reservation'));
app.get('/reservations', require('./routes/reservations'));
app.get('/cheap-meals', require('./routes/cheap-meals'));
app.get('/large-meals', require('./routes/large-meals'));

app.listen(3000);
