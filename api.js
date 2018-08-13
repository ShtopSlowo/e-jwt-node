const express = require('express');
const bodyParser = require('body-parser');
const expressJwt = require('express-jwt');

const { serverRunMessage } = require('./utils');
const { secret, API_PORT } = require('./config');

const jwtCheck = expressJwt({ secret });
const app = express();

app.use(bodyParser.json());
app.get('/public', (req, res) => {
  res
    .status(200)
    .json({ msg: 'You access to public route' });
});

app.get('/private', jwtCheck, (req, res) => {
  res
    .status(200)
    .json({ msg: 'You access to private route' });
});

app.listen(API_PORT, () => serverRunMessage(API_PORT, 'Api server is running'));
