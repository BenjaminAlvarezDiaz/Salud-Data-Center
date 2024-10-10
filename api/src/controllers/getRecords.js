const { Record } = require("../db");

async function getRecordById(req, res) {
  const { id } = req.params;

  try {
    // Convertir el ID a un número antes de pasarlo a findByPk
    const recordId = parseInt(id);

    const record = await Record.findByPk(recordId);

    if (record) {
      return res.status(200).json(record);
    } else {
      return res.status(404).json({ error: 'Registro no encontrado' });
    }
  } catch (error) {
    console.error("Error al obtener el historial por ID:", error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}

async function getAllRecords(req, res) {
  try {
    const records = await Record.findAll();
    return res.status(200).json(records);
  } catch (error) {
    console.error("Error al obtener todos los registros:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
}

module.exports = {
  getRecordById,
  getAllRecords
};