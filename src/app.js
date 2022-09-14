const express = require("express");

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.json({ message: 'App is running' })
});

app.listen(8080, () => console.log('App is running'));
