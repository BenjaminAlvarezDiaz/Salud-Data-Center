const { Appointment } = require("../db");

async function updateAppointment(req, res) {
  try {
    const appointmentId = req.query.id;

    // Buscar el doctor por su ID
    const appointment = await Appointment.findByPk(appointmentId);

    if (appointment) {
      appointment.idDoctor = req.body.idDoctor; 
      appointment.fechaAtencion = req.body.fechaAtencion;
      appointment.inicioAtencion = req.body.inicioAtencion;  
      appointment.finAtencion = req.body.finAtencion; 
      appointment.estadoCita = req.body.estadoCita;   
   
      await appointment.save();

      return res.json({ message: 'Cita actualizada correctamente', appointment });
    } else {
      return res.status(404).json({ message: 'Cita no encontrada' });
    }
  } catch (error) {
    console.error("Error al actualizar el cita:", error);
    return res.status(500).json({ error: "Error interno del servidor al actualizar el cita" });
  }
}

module.exports = {
    updateAppointment,
};
