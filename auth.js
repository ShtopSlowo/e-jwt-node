const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const { secret, AUTH_PORT } = require('./config');
const { serverRunMessage } = require('./utils');

const app = express();
const users = [
  { username: 'admin', password: 'admin' },
  { username: 'guest', password: 'guest' },
];
app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res
      .status(400)
      .send('Incorrect data. Need username and password');
    return;
  }
  const user = users.find(u => u.username === username
    && u.password === password);
  if (!user) {
    res
      .status(400)
      .send('Auth falied!');
    return;
  }

  const token = jwt.sign({
    sub: user.id,
    username: user.username,
  }, secret);
  res
    .status(200)
    .json({ token });
});

app.get('*', (req, res) => {
  res.status(404).send('Page not found!');
});

app.listen(AUTH_PORT, () => serverRunMessage(AUTH_PORT, 'To login use POST /login.'));
