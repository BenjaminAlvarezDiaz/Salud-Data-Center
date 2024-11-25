const { Patient } = require("../db");

async function updatePatients(req, res) {
  try {
    const pacientesId = req.query.id;

    // Buscar el pacientes por su ID
    const pacientes = await Patient.findByPk(pacientesId);

    if (pacientes) {
      pacientes.nombre = req.body.nombre; 
      pacientes.apellido = req.body.apellido; 
      pacientes.dni = req.body.dni;
      pacientes.age = req.body.age;
      pacientes.telefono = req.body.telefono;  
      pacientes.telefono2 = req.body.telefono2;
      pacientes.sintomas = req.body.sintomas;
      pacientes.tratamiento = req.body.tratamiento;
      pacientes.diagnostico = req.body.diagnostico; 
      pacientes.exp_Medico = req.body.exp_Medico;              

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
