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
      suggestProduct,
    } = req.body;
    try {
      const NewPaciente = await Patient.create({
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
        suggestProduct,
      });
      console.log(NewPaciente);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
}
  
module.exports = {postPatients};
