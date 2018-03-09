const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const config = require('../config');
const routes = require('../routes');

const app = express();
app.use(morgan('combined'));
app.use(bodyparser.json());
app.use(cors());
routes(app);

app.listen(config.PORT);
console.log(`App is listening to ${config.PORT}`);
