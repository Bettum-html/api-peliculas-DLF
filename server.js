const express = require('express');
const { sequelize } = require('./modules/db');
const peliculasRouter = require('./routes/ruta-pelicula');

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use((req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey === '12345') {
    next();
  } else {
    res.status(403).json({ error: 'API Key inválida' });
  }
});


app.use('/peliculas', peliculasRouter);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Servidor en http://localhost:3000');
  });
});