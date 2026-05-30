import Pelicula from '../modules/model-pelicula.js';

//- - - CRUD - - - 

class PeliculaService {

  async getAll() {
    return await Pelicula.findAll();
  }

  async getById(id) {
    return await Pelicula.findByPk(id);
  }

  async create(data) {
    return await Pelicula.create(data);
  }

  async update(id, data) {
    const pelicula = await Pelicula.findByPk(id);
    if (!pelicula) return null;
    return await pelicula.update(data);
  }

  async delete(id) {
    const pelicula = await Pelicula.findByPk(id);
    if (!pelicula) return null;
    await pelicula.destroy();
    return { deleted: true };
  }
}

export default new PeliculaService();
