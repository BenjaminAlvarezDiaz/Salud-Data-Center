const { Empresas } = require ("../db.js");

//Crear projecto

const createEmpresas = async (req, res) => {
    const {name, nombreusuario, contrasena, contact, logo, url} = req.body

try {

    const newEmpresas = await Empresas.create({
        name,
        nombreusuario,
        contrasena,
        contact,
        logo,
        url,

    })

res.json(newEmpresas)

} catch (error) {
    
    return res.status(500).json({message: error.message})

}

}

module.exports = {createEmpresas}