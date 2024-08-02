const express = require('express');
const app = express();
const port = 8002;

const vigenere = require('caesar-salad').Vigenere;
const password = 'HelloWorld2024!';

const encodeText = (text) => vigenere.Cipher(password).crypt(text);
const decodeText = (text) => vigenere.Decipher(password).crypt(text);

app.get('/', (req, res) => {
  return res.send(`<h1>Enter some text in search line. Example: /encode/hello</h1>`);
});

app.get('/encode/:text', (req, res) => {
  const text = req.params.text;
  const encodedText = encodeText(text);
  return res.send(`<h1>${encodedText}</h1>`);
});

app.get('/decode/:text', (req, res) => {
  const text = req.params.text;
  const decodedText = decodeText(text);
  return res.send(`<h1>${decodedText}</h1>`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});