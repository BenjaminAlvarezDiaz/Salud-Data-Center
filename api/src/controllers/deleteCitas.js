const { Appointment } = require('../db.js');

async function deleteAppointment(req,res){
    try {
        if(req.query.id){
            const data = await deleteAppointmentById(req.query.id);
            console.log('eliminando cita por id');
            if (data) {
                return res.json(data);
            } else {
                return res.status(404).json({ message: "ID del cita no existe en db" });
            }
        }

        if (req.query.idCliente) {
            const data = await deleteAppointmentByParam(req.query.idCliente);
            console.log('eliminando cita por idCliente');
            if (data) {
              return res.json(data);
            } else {
              return res
                .status(404)
                .json({ message: "Id del cliente no existe en db" });
            }
        }

        if (req.query.idDoctor) {
            const data = await deleteAppointmentByParam(req.query.idDoctor);
            console.log('eliminando cita por idDoctor');
            if (data) {
              return res.json(data);
            } else {
              return res
                .status(404)
                .json({ message: "Id del doctor no existe en db" });
            }
        }

        if (req.query.estadoCita == 'finished') {
            const data = await deleteAppointmentByStatus(req.query.estadoCita);
            console.log('eliminando cita por status "finished"');
            if (data) {
              return res.json(data);
            } else {
              return res
                .status(404)
                .json({ message: "Status de la cita no existe en db" });
            }
        }

    } catch (error) {
        console.error("Error al eliminar la cita:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
}

async function deleteAppointmentById(id){
    const data = await Appointment.destroy({
        where : { id },
    });
    
    return data.length ? data : false;
}

async function deleteAppointmentByParam(appointmentData){
    const data = await Appointment.destroy({
        where : { appointmentData },
    });
    
    return data.length ? data : false;
}

async function deleteAppointmentByStatus(appointmentData){
    const data = await Appointment.destroy({
        where : { appointmentData },
    });
    
    return data.length ? data : false;
}

module.exports = {
    deleteAppointment,
    deleteAppointmentById,
    deleteAppointmentByParam,
    deleteAppointmentByStatus
};