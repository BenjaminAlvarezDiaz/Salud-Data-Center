const { Doctor } = require ("../db.js");

//Crear projecto

async function createDoctors (req, res) {
    const {matricula, nombreusuario, nombre, password, email, dni} = req.body

try {

    const newDoctor = await Doctor.create({
        matricula,
        nombreusuario,
        nombre,
        password,
        email,
        dni,
    })

res.json(newDoctor)

} catch (error) {
    
    return res.status(500).json({message: error.message})

}

}

module.exports = {createDoctors}