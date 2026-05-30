import express from 'express';
import { sequelize } from './modules/db.js';
import peliculasRouter from './routes/ruta-pelicula.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API funcionando...');
});

app.use('/peliculas', peliculasRouter);

async function iniciarServidor() {
  try {
    await sequelize.authenticate();
    console.log('Conexión con PostgreSQL establecida');

    await sequelize.sync();

    app.listen(process.env.PORT || 3001, () => {
      console.log('API lista en http://localhost:3000');
    });

  } catch (error) {
    console.error(error);
  }
}

iniciarServidor();
