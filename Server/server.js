const express = require('express');
const cors = require('cors');
const routerApi = require('./routes/index');
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handler');

const app = express();
const port = 3000;

app.use(express.json());

const whitelist = ['http://localhost:5173/', 'https://jairocolon.com'];
app.use(cors(whitelist));

app.get('/', (req, res) => {
  res.send('Hola, este es mi primer servidor de Backend :)');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Server On', +port);
});
