const express = require('express');

const app = express();
const port = 8001;

app.get('/:name', (req, res) => {
    return res.send(`<h1>${req.params.name}</h1>`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});