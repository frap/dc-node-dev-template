const express = require('express');

const app = express();

app.get('/', function (req, res) {
  res.send('Bonjour mondial!')
})

app.listen(3000, function () {
  console.log('Atea app en écoute sur le port 3000!')
})
