const { Records } = require('../db');

// Método para crear un nuevo registro médico
async function postRecords(req, res) {
  const {
    nombrepaciente,
    doctorasignado,
    fechaemision,
    razondevisita,
    tratamiento,
    indicaciones
  } = req.body;

  try {
    // Crear un nuevo registro médico en la base de datos
    const nuevoHistorial = await Records.create({
      nombrepaciente,
      doctorasignado,
      fechaemision,
      razondevisita,
      tratamiento,
      indicaciones,
    });

    return res.status(201).json(nuevoHistorial);
  } catch (error) {
    console.error('Error al crear un nuevo historial médico:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}

module.exports = {
  postRecords
};