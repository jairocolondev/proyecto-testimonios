const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola, este es mi primer servidor de Backend :)');
});

app.get('/nuevo-endpoint', (req, res) => {
  res.send('Hola, soy un nuevo endpoint!');
});

app.get('/producto', (req, res) => {
  res.json({
    name: 'Producto 1',
    price: 1000,
  });
});

app.listen(port, () => {
  console.log('Run Server', +port);
});
