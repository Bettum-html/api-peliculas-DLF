const express = require('express');
const router = express.Router();
const service = require('../services/serv-pelicula');

// GET todas
router.get('/', async (req, res) => {
  const data = await service.getAll();
  res.json(data);
});

// GET por ID
router.get('/:id', async (req, res) => {
  const data = await service.getById(req.params.id);
  if (!data) return res.status(404).json({ error: 'No encontrado' });
  res.json(data);
});

// POST
router.post('/', async (req, res) => {
  const data = await service.create(req.body);
  res.status(201).json(data);
});

// PUT
router.put('/:id', async (req, res) => {
  const data = await service.update(req.params.id, req.body);
  if (!data) return res.status(404).json({ error: 'No encontrado' });
  res.json(data);
});

// DELETE
router.delete('/:id', async (req, res) => {
  const data = await service.delete(req.params.id);
  if (!data) return res.status(404).json({ error: 'No encontrado' });
  res.json(data);
});

module.exports = router;