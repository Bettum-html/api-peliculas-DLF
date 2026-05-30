const express = require('express');
const { sequelize } = require('./modules/db');
const peliculasRouter = require('./routes/ruta-pelicula');

const app = express();
app.use(express.json());

// Inicialización asíncrona de la base de datos
try {
await sequelize.authenticate();
console.log('Conexión con PostgreSQL establecida correctamente.');
await sequelize.sync(); // Crea la tabla en la nube si no existe
} catch (error) {
console.error('Error al inicializar la base de datos:', error);
}

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

app.listen(process.env.PORT | 3001, () => console.log('API lista en http://localhost:3000'));
