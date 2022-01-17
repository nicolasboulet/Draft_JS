const express = require('express');

const app = express();


app.use('/users', (req, res, next) => {
  res.send('<h1>Welcome to Users part</h1>')
  console.log('users')
});

app.use('/', (req, res, next) => {
  res.send('<h1>Welcome to root :-)</h1>')
  console.log('root')
});

app.listen(3000);
