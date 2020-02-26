const express = require('express');
const app = express();



app.use('/meals', require('./routes/meals'));
app.use('/reservations', require('./routes/reservations'));
app.use('/reviews', require('./routes/reviews'));

app.use('/', (req, res) => {
   res.send('Hallo ..');
});
app.listen(3000);
