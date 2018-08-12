const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8888;

app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const user = req.body.username;
  res
    .status(200)
    .send(`You are login as ${user}`);
});
app.get('*', (req, res) => {
  res.sendStatus(404);
});

app.listen(PORT, () => console.log(`Server running on ${PORT} ...`));
