const { Appointment } = require("../db");

async function getAppointment(req, res) {
    try {
        if (req.query.id) {
            const data = await getAppointmentById(req.query.id);
            if (data) {
              return res.json(data);
            } else {
              return res
                .status(404)
                .json({ message: "Id de la cita no existe en db" });
            }
        }

        if (req.query.idCliente) {
            const data = await getAppointmentByParam(req.query.idCliente);
            if (data) {
              return res.json(data);
            } else {
              return res
                .status(404)
                .json({ message: "Id del cliente no existe en db" });
            }
        }

        if (req.query.idDoctor) {
            const data = await getAppointmentByParam(req.query.idDoctor);
            if (data) {
              return res.json(data);
            } else {
              return res
                .status(404)
                .json({ message: "Id del doctor no existe en db" });
            }
        }

        if (req.query.estadoCita == 'finished') {
            const data = await getAppointmentByStatus(req.query.estadoCita);
            if (data) {
              return res.json(data);
            } else {
              return res
                .status(404)
                .json({ message: "Status de la cita no existe en db" });
            }
        }

        if (req.query.estadoCita == 'progress'){
            const data = await getAppointmentByStatus(req.query.estadoCita);
            if (data) {
              return res.json(data);
            } else {
              return res
                .status(404)
                .json({ message: "Status de la cita no existe en db" });
            }
        }

        if (req.query.estadoCita == 'scheduled'){
            const data = await getAppointmentByStatus(req.query.estadoCita);
            if (data) {
              return res.json(data);
            } else {
              return res
                .status(404)
                .json({ message: "Status de la cita no existe en db" });
            }
        }

        const appointment = await Appointment.findAll();
        return res.status(200).json(appointment);
    } catch (error) {
        console.error("Error al obtener las citas:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
}

async function getAppointmentById(id) {
    try {
        const data = await Appointment.findByPk(id);
    
        if (data) {
          return data;
        } else {
          return false;
        }
    } catch (error) {
        console.error("Error al obtener la cita por ID:", error);
        return "Error interno del servidor";
    }
}

async function getAppointmentByParam(appointmentData) {
    try {
        const data = await Appointment.findOne({ where: { appointmentData } });
        if (data) {
                return data;
        } else {
                return false;
        }
    } catch (error) {
        console.error("Error al obtener el pedido por '${appointmentData}': ", error);
        return "Error interno del servidor";
    }
}

async function getAppointmentByStatus(appointmentData) {
    try {
        const data = await Appointment.findOne({ where: { appointmentData } });
        if (data) {
                return data;
        } else {
                return false;
        }
    } catch (error) {
        console.error("Error al obtener el pedido por '${appointmentData}': ", error);
        return "Error interno del servidor";
    }
}

module.exports = {
    getAppointment,
    getAppointmentByParam,
    getAppointmentByStatus,
};