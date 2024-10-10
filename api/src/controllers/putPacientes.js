const { Patient } = require("../db");

async function updatePatients(req, res) {
  try {
    const pacientesId = req.query.id;

    // Buscar el pacientes por su ID
    const pacientes = await Patient.findByPk(pacientesId);

    if (pacientes) {
      pacientes.Nombre = req.body.Nombre; 
      pacientes.Apellido = req.body.Apellido; 
      pacientes.Dni = req.body.Dni;
      pacientes.Telefono = req.body.Telefono;  
      pacientes.Telefono = req.body.Telefono; 
      pacientes.Telefono2 = req.body.Telefono2;
      pacientes.Sintomas = req.body.Sintomas;
      pacientes.Tratamiento = req.body.Tratamiento;
      pacientes.Diagnostico = req.body.Diagnostico; 
      pacientes.Exp_Medico = req.body.Exp_Medico;              
   
      await pacientes.save();

      return res.json({ message: 'Paciente actualizado correctamente', pacientes });
    } else {
      return res.status(404).json({ message: 'Paciente no encontrado' });
    }
  } catch (error) {
    console.error("Error al actualizar el pacientes:", error);
    return res.status(500).json({ error: "Error interno del servidor al actualizar el pacientes" });
  }
}

module.exports = {
  updatePatients,
};
