const { Patient } = require('../db.js');

async function postPatients(req, res) {
    const {
      nombre,
      apellido,
      dni,
      age,
      email,
      telefono,
      telefono2,
      sintomas,
      tratamiento,
      diagnostico,
      exp_Medico,
    } = req.body;
    try {
      const newPaciente = await Patient.create({
        nombre,
        apellido,
        dni,
        age,
        email,
        telefono,
        telefono2,
        sintomas,
        tratamiento,
        diagnostico,
        exp_Medico,
      });
      return res.status(201).json(newPaciente);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
}
  
module.exports = {postPatients};
