const { Doctor } = require ("../db.js");

//Crear projecto

async function CreateDoctors (req, res) {
    const {matricula, nombreusuario, nombre, contrasena, email, dni} = req.body

try {

    const newDoctor = await Doctor.create({
        matricula,
        nombreusuario,
        nombre,
        contrasena,
        email,
        dni,
    })

res.json(newDoctor)

} catch (error) {
    
    return res.status(500).json({message: error.message})

}

}

module.exports = {CreateDoctors}