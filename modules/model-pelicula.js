import { DataTypes } from 'sequelize';
import { sequelize } from './db.js';

const Pelicula = sequelize.define('Pelicula', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  director: {
    type: DataTypes.STRING,
  },
  anio: {
    type: DataTypes.INTEGER,
  }
}, {
  tableName: 'peliculas',
  timestamps: false
});

export default Pelicula;
