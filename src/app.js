const express = require("express");

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.json({ ok: 'App is running' })
});

app.listen(8080);
