const { Doctor } = require("../db");

async function updateDoctor(req, res) {
  try {
    const doctorId = req.query.id;

    // Buscar el doctor por su ID
    const doctor = await Doctor.findByPk(doctorId);

    if (doctor) {
      doctor.nombre = req.body.nombre; 
      doctor.nombreusuario = req.body.nombreusuario; 
      doctor.matricula = req.body.matricula;
      doctor.contrasena = req.body.contrasena;  
      doctor.email = req.body.email; 
      doctor.dni = req.body.dni;   
   
      await doctor.save();

      return res.json({ message: 'Doctor actualizado correctamente', doctor });
    } else {
      return res.status(404).json({ message: 'Doctor no encontrado' });
    }
  } catch (error) {
    console.error("Error al actualizar el doctor:", error);
    return res.status(500).json({ error: "Error interno del servidor al actualizar el doctor" });
  }
}

module.exports = {
  updateDoctor,
};
