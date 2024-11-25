const { Record } = require("../db.js");

async function deleteRecords (req, res){
    try {
        if(req.query.id){
            const data = await deleteRecordById(req.query.id);
            console.log('eliminando registro por id');
            if (data) {
                return res.json(data);
            } else {
                return res.status(404).json({ message: "ID del registro no existe en db" });
            }
        }

        if(req.query.nombrepaciente){
            const data = await deleteRecordByParam(req.query.nombrepaciente);
            console.log('eliminando registro por nombrepaciente');
            if (data) {
                return res.json(data);
            } else {
                return res.status(404).json({ message: "nombre del paciente no existe en db" });
            }
        }

        if(req.query.doctorasignado){
            const data = await deleteRecordByParam(req.query.doctorasignado);
            console.log('eliminando registro por doctorasignado');
            if (data) {
                return res.json(data);
            } else {
                return res.status(404).json({ message: "nombre del doctor no existe en db" });
            }
        }

        if(req.query.dnipaciente){
            const data = await deleteRecordByParam(req.query.dnipaciente);
            console.log('Eliminado registro por el dni del paciente');
            if (data) {
                return res.json(data);
            } else {
                return res.status(404).json({ message: "dni del paciente no existe en db" });
            }
        }

    } catch (error) {
        console.error("Error al eliminar el registro:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
}

async function deleteRecordById(id){
    const data = await Record.destroy({
        where : { id },
    });
    
    return data.length ? data : false;
}

async function deleteRecordByParam(recordData){
    const data = await Record.destroy({
        where : { recordData },
    });
    
    return data.length ? data : false;
}


module.exports = {
    deleteRecords,
    deleteRecordById,
    deleteRecordByParam,
};