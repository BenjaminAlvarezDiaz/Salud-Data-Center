const { Pacientes } = require('../db.js');

async function PostPacientes(req, res) {
    const {
      Nombre,
      Apellido,
      Dni,
      Email,
      Telefono,
      Telefono2,
      Sintomas,
      Tratamiento,
      Diagnostico,
      Exp_Medico,
    } = req.body;
    try {
      const NewPaciente = await Pacientes.create({
        Nombre,
        Apellido,
        Dni,
        Email,
        Telefono,
        Telefono2,
        Sintomas,
        Tratamiento,
        Diagnostico,
        Exp_Medico,
      });
      console.log(NewPaciente);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
}
  
module.exports = {PostPacientes};
