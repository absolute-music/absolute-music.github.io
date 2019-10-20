const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'login.html'));
});

app.listen(50451, () => {
  console.info('Running on port 50451');
});
