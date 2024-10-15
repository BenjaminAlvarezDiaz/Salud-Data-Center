const { Appointment } = require ("../db.js");

async function createAppointment (req, res) {
    const {
        idCliente, 
        idDoctor, 
        fechaAtencion, 
        inicioAtencion, 
        finAtencion, 
        estadoCita
    } = req.body

try {

    const newAppointment = await Appointment.create({
        idCliente,
        idDoctor,
        fechaAtencion,
        inicioAtencion,
        finAtencion,
        estadoCita,
    })

res.json(newAppointment)

} catch (error) {
    
    return res.status(500).json({message: error.message})

}

}

module.exports = {
    createAppointment,
};