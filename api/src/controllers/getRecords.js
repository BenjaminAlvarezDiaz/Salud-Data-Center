const { Record } = require("../db");
const { Sequelize, Op } = require("sequelize");

async function getRecords (req, res){
    try {

        if(req.query.id){
            const data = await getRecordById(req.query.id);
            if(data){
                return res.json(data);
            }else {
                return res.status(404).json({ message: "ID del registro no existe en db" });
            }
        }

        if(req.query.dnipaciente){
            const data = await getRecordByDniPatient(req.query.dnipaciente);
            if(data){
                return res.json(data);
            }else {
                return res.status(404).json({ message: "DNI del paciente no existe en db" });
            }
        }

    // Todos
    //const records = await getAllRecords();
    const records = await Record.findAll();
    return res.json(records);
    } catch (error) {
        console.error("Error al obtener los registros:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
}

async function getRecordById(req, res) {
    const { id } = req.params;

    try {
    // Convertir el ID a un número antes de pasarlo a findByPk
        const recordId = parseInt(id);

        const record = await Record.findByPk(recordId);

        if (record) {
            return res.status(200).json(record);
        } else {
            return res.status(404).json({ error: 'Registro no encontrado' });
        }
  } catch (error) {
    console.error("Error al obtener el historial por ID:", error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}

async function getRecordByDniPatient (dnipaciente){
    try {
        const data = await Record.findOne({ 
            where: { dnipaciente },
            //Obtiene los registros en funcion a la fecha actual, modificar si no se usa POSTGRESQL
            order: [
                [
                    Sequelize.literal(
                        "ABS(EXTRACT(EPOCH FROM (fechaemision::timestamp - NOW())))"
                    ),
                    "ASC",
                ],
            ],
        });
        if (data) {
            return data;
        } else {
            return false;
        }
    } catch (error) {
        console.error("Error al obtener el registro por el dni del paciente:", error);
        return "Error interno del servidor";
    }
}

async function getAllRecords(req, res) {
    try {
        const records = await Record.findAll({
            order: [
                [
                    Sequelize.literal(
                        "ABS(EXTRACT(EPOCH FROM (fechaemision::timestamp - NOW())))"
                    ),
                    "ASC",
                ],
            ],
        });
        return res.status(200).json(records);
    } catch (error) {
        console.error("Error al obtener todos los registros:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
}

module.exports = {
    getRecords,
    getRecordById,
    getRecordByDniPatient,
    getAllRecords,
};