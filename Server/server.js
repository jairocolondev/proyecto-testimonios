const express = require('express');
const routerApi = require('./routes/index');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola, este es mi primer servidor de Backend :)');
});

routerApi(app);

app.listen(port, () => {
  console.log('Server On', +port);
});
