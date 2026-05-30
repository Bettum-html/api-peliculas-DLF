import express from 'express';
import { sequelize } from './modules/db.js';
import peliculasRouter from './routes/ruta-pelicula.js';

const app = express();

app.use(express.json());
// Inicialización asíncrona de la base de datos
async function iniciarServidor() {
  try {
    await sequelize.authenticate();
    console.log('Conexión con PostgreSQL establecida correctamente.');
    await sequelize.sync();// Crea la tabla en la nube si no existe
    app.listen(process.env.PORT || 3001, () => {
      console.log(`Servidor iniciado`);
    });
  } catch (error) {
    console.error(error);
  }
}

app.use('/peliculas', peliculasRouter);
app.listen(process.env.PORT | 3001, () => console.log('API lista en http://localhost:3000'));


iniciarServidor();
