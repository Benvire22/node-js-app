const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  return res.send(`<h1>Enter some text in search line. Example: /hello</h1>`);
});

app.get('/:name', (req, res) => {
  return res.send(`<h1>${req.params.name}</h1>`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});