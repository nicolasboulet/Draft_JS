const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('views engine', 'ejs')
app.set('views', 'views')

app.listen(3000);