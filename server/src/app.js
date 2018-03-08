const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
app.use(bodyparser.json());
app.use(cors());

app.get('/status', (req, res) => {
  res.send({
    message: 'Hello world'
  });
});
app.post('/register', (req, res) => {
  res.send({
    message: `You are registered! ${req.body.email}`
  });
});
app.listen(process.env.PORT || 8081);
